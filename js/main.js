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
    discos: [],
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
      return this.keyword ? this.discos
          .filter(disc => {
            const checkMatch = properties => properties
              .some(property =>
                disc[property].toLowerCase().includes(this.keyword.toLowerCase())
              )

            const testProperties = ['songName', 'albumName', 'discType']

            return checkMatch(testProperties)
          })
        : this.discos
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
      this.discos = data;
      this.rows = this.discos.length;
    });

    window.disqus_config=function(){this.page.url="https://thepillows-ohyeah.github.io/",this.page.identifier="thepillows-ohyeah"};

    !function(){var e=document,t=e.createElement("script");t.src="https://thepillows-ohyeah.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)}();

    function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-168710081-1");
  }
});

var yeahsPerYearChartContext = document.getElementById('yeahsPerYearChart').getContext('2d');
new Chart(yeahsPerYearChartContext, {
  type: 'horizontalBar',
  data: {
    labels: ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
          '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012',
          '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    datasets: [{
      label: 'Number of yeahs',
      backgroundColor: 'rgba(255, 188, 9, .6)',
      borderColor: 'rgb(36, 36, 36)',
      borderWidth: 1,
      fill: false,
      data: [2, 0, 14, 0, 25, 39, 6, 29, 114, 101, 20, 36, 67, 25, 25, 8, 10, 41, 26, 5, 0, 17, 1, 0, 12, 0, 1, 9, 14, 0, 0]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Total yeah per year'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Total yeahs'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Year'
        },
        ticks: {
          min: 0,
          max: 120,
          stepSize: 10
        }
      }]
    }
  }
});

var yeahsPerDecadeChartContext = document.getElementById('yeahsPerDecadeChart').getContext('2d');
new Chart(yeahsPerDecadeChartContext, {
  type: 'bar',
  data: {
    labels: ['1990 - 1999', '2000 - 2009', '2010 - 2019', '2020 - Present'],
    datasets: [{
      label: 'Number of yeahs',
      backgroundColor: 'rgba(255, 188, 9, .6)',
      borderColor: 'rgb(36, 36, 36)',
      borderWidth: 1,
      fill: false,
      data: [330, 263, 54, 0]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Total yeah per decade'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Decade period year'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Total yeahs'
        },
        ticks: {
          min: 0,
          max: 340,
          stepSize: 20
        }
      }]
    }
  }
});

var yeahsPerLabelCompanyChartContext = document.getElementById('yeahsPerLabelCompanyChart').getContext('2d');
new Chart(yeahsPerLabelCompanyChartContext, {
  type: 'bar',
  data: {
    datasets: [{
      label: 'Captain Records (1990)',
      backgroundColor: '#ffbc09',
      borderColor: 'rgb(36, 36, 36)',
      borderWidth: 2,
      fill: false,
      data: [2]
    },
    {
      label: 'Pony Canyon (1991-1993)',
      backgroundColor: '#e70023',
      borderColor: '#e70023',
      borderWidth: 2,
      fill: false,
      data: [14]
    },
    {
      label: 'King Records (1994-2006)',
      backgroundColor: '#009944',
      borderColor: '#009944',
      borderWidth: 2,
      fill: false,
      data: [505]
    },
    {
      label: 'Avex Trax (2006-2016)',
      backgroundColor: '#004ca3',
      borderColor: '#004ca3',
      borderWidth: 2,
      fill: false,
      data: [90]
    },
    {
      label: 'Delicious Label (2016-Present)',
      backgroundColor: '#080808',
      borderColor: '#080808',
      borderWidth: 2,
      fill: false,
      data: [36]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Total yeah per label company'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Company Label'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Total yeahs per label company'
        },
        ticks: {
          min: 0,
          max: 525,
          stepSize: 25
        }
      }]
    }
  }
});
