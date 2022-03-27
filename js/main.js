const pagination = Vue.component('pagination', {
  template: '#pagination',
  props: ['value', 'rows', 'perPage']
});

new Vue({
  el: "#app",
  components: { pagination },
  data: {
    tableColumns: [
      { key: '#', sortable: false },
      { key: 'songName', sortable: true },
      { key: 'albumName', sortable: true },
      { key: 'discType', sortable: true },
      { key: 'year', sortable: true },
      { key: 'numberOfYeah', sortable: true }
    ],
    visible: false,
    scrollStatus: false,
    scrollTriggerY: 50,
    discs: [],
    keyword: "",
    sortBy: "songName",
    sortDesc: false,
    perPage: 10,
    currentPage: 1,
    rows: null,
    yeahMax: 30,
    someYeahCurrentValue: 24,
    yeahInRow: 16,
    noYeahs: 8
  },
  computed: {
    items() {
      return this.keyword ? this.discs.filter(disc => {
          const checkMatch = properties => properties.some(property =>
            disc[property].toLowerCase().includes(this.keyword.toLowerCase())
          )
          const testProperties = ['songName', 'albumName', 'discType'];

          return checkMatch(testProperties)
          })
        : this.discs
    }
  },
  methods: {
    callback(visible) {
      if (visible) {
        this.visible = true
      }
    },
    onFiltered(filteredItems) {
      this.rows = filteredItems.length
      this.currentPage = 1;
    },
    scrollManager(){
      var scrollY = this.$refs["scrollParent"].scrollTop;
      this.scrollStatus = scrollY > this.scrollTriggerY;
    },
    animateYeahCounter() {
      $('.yeah-podium-numbers').each((index, element) => {
        $(element).prop('counter', 0).animate({
          counter: $(element).text()
        }, {
          duration: 2500,
          easing: 'swing',
          step: (now) => {
              $(element).text((Math.ceil(now)));
          }
        });
      });
    },
    loadDisqusComments() {
      window.disqus_config=function(){this.page.url="https://thepillows-ohyeah.github.io/",this.page.identifier="thepillows-ohyeah"};
      !function(){let e=document,t=e.createElement("script");t.async=true,t.src="https://thepillows-ohyeah.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)}();
    }
  },
  mounted() {
    var isRankingShow = false;
    var isDisqusShow = false;

    $(window).on("scroll", () => {
      let view = $(window).scrollTop() + $(window).height();
      
      let disqusElement = $("#disqus_thread").offset().top - 100;
      if (view >= disqusElement && !isDisqusShow){
        this.loadDisqusComments();
        isDisqusShow = true;
      }

      let rankingElement = $("#ranking").offset().top + 200;
      if (view > rankingElement && !isRankingShow) {
        isRankingShow = true;
        this.animateYeahCounter();
      }

    });
  },
  created() {
    fetch("js/thepillowsAllSongs.json")
      .then(response => response.json())
      .then(data => {
        this.discs = data;
        this.rows = this.discs.length;
      });

    function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-168710081-1");
  }
});
