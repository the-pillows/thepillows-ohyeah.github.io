const pagination = Vue.component('pagination', {
  template: '#pagination-template',
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
    noYeahs: 7
  },
  computed: {
    items() {
      return this.keyword 
        ? this.discs.filter(disc => {
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
    onFiltered(filteredItems) {
      this.rows = filteredItems.length
      this.currentPage = 1;
    },
  },
  created() {
    fetch("js/thepillowsAllSongs.json")
    .then(response => response.json())
    .then(data => {
      this.discs = data;
      this.rows = this.discs.length;
    });

    // Disqus Comments
    window.disqus_config=function(){this.page.url="https://thepillows-ohyeah.github.io/",this.page.identifier="thepillows-ohyeah"};
    !function(){var e=document,t=e.createElement("script");t.src="https://thepillows-ohyeah.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)}();

    // Google Tag Manager
    function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-168710081-1");
  }
});
