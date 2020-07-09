<template>
  <div id="app">
    <div class="d-flex flex-column flex-wrap text-center pt-3">
      <h1 class="mb-3">the pillows "yeah" counter Chart</h1>
      <div class="d-flex align-items-center the-pillows-background font-weight-bold">
        <div class="mx-auto the-pillows-background-text">
          <p class="mb-5 font-weight-bold display-3">OH YEAH?</p>
          <p class="font-weight-bold h1">Do you know me!?</p>
          <p class="font-weight-bold h1">Our name is <strong>
            <a href="https://en.wikipedia.org/wiki/The_Pillows" target="_blank">the pillows</a></strong>, OK?
          </p>
        </div>
      </div>
    </div>

    <b-container fluid="lg" class="mb-3 pt-5">
      <b-row>
        <b-col>
          <h1 class="text-center mb-5 font-weight-bold">Yeah Ranking Songs</h1>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="mx-auto mb-5">
          <h2 class="font-weight-bold text-center mb-3">Total current "yeahs"</h2>
          <div class="text-center mb-3">
            <div class="text-center winning-emoji-size">🏆</div>
            <span class="yeah-podium-numbers font-weight-bold text-center text-success">647</span>
          </div>
        </b-col>
      </b-row>

      <b-row >
        <b-col class="mx-auto mb-5">
          <h3 class="text-center mb-3">1<sup>st</sup> song with more "yeah"</h3>
          <div class="yeah-podium-container d-flex mx-auto mb-3">
            <div class="text-center winning-emoji-size">🥇</div>
          </div>
          <p class="yeah-podium-numbers yeah-first-position font-weight-bold text-center align-self-center">76</p>
          <p class="font-weight-bold text-center song-winner-size">Like a Lovesong (Back to Back)</p>
          <p class="text-center">Album: Little Busters (1998)</p>
        </b-col>

        <b-col class="mx-auto mb-5">
          <h3 class="text-center mb-3">2<sup>nd</sup> song with more "yeah"</h3>
          <div class="yeah-podium-container d-flex mx-auto mb-3">
            <div class="text-center winning-emoji-size">🥈</div>
          </div>
          <p class="yeah-podium-numbers yeah-second-position font-weight-bold text-center align-self-center">42</p>
          <p class="font-weight-bold text-center song-winner-size">Rookie Jet</p>
          <p class="text-center">Album: Thank you, My Twilight (2002)</p>
        </b-col>

        <b-col class="mx-auto mb-5">
          <h3 class="text-center mb-3">3<sup>rd</sup> song with more "yeah"</h3>
          <div class="yeah-podium-container d-flex mx-auto mb-3">
            <div class="text-center winning-emoji-size">🥉</div>
          </div>
          <p class="yeah-podium-numbers yeah-third-position font-weight-bold text-center align-self-center">35</p>
          <p class="font-weight-bold text-center song-winner-size">Back Seat Dog</p>
          <p class="text-center">Album: Happy Bivouac (1999)</p>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols-md="6" class="mx-auto mb-5">
          <h3 class="text-center mb-3">1<sup>st</sup> "yeah" song</h3>
          <div class="text-center mb-3">
            <div class="text-center winning-emoji-size">🏆</div>
            <span class="font-weight-bold text-center text-success song-winner-size">Never Find</span>
          </div>
          <p class="text-center">Album: 90's My Life (1990)</p>
        </b-col>

        <b-col cols-md="6" class="mx-auto mb-5">
          <h3 class="text-center mb-3">Last "yeah" song</h3>
          <div class="text-center mb-3">
            <div class="text-center winning-emoji-size">🏆</div>
            <span class="font-weight-bold text-center text-danger song-winner-size">Before going bed</span>
          </div>
          <p class="text-center">Album: Rebroadcast (2018)</p>
        </b-col>
      </b-row>

      <b-container fluid="xl" class="mb-5 pt-5">
        <b-row>
          <h1 class="mx-auto mb-5 font-weight-bold">Yeah Overall</h1>
        </b-row>

        <b-row class="mb-3">
          <b-col cols="12">
            <p class="mb-2">Total years with some "yeahs"! <span class="yeah-overall-emoji-size">😀</span></p>
            <b-progress :max="yeahMax" height="1.5rem" variant="success" show-progress class="mb-2">
              <b-progress-bar :value="someYeahCurrentValue" :label="`${ someYeahCurrentValue } years`"></b-progress-bar>
            </b-progress>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12" class="mb-3">
            <p class="mb-2">Total years with "yeahs" in a row! <span class="yeah-overall-emoji-size">😄</span></p>
            <b-progress :max="yeahMax" height="1.5rem" variant="success" show-progress class="mb-2">
              <b-progress-bar :value="yeahInRow" :label="`${ yeahInRow } years`"></b-progress-bar>
            </b-progress>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12" class="mb-3">
            <p class="mb-2">Total years with no "yeahs" <span class="yeah-overall-emoji-size">☹️</span></p>
            <b-progress :max="yeahMax" height="1.5rem" variant="danger" show-progress class="mb-2">
              <b-progress-bar :value="noYeahs" :label="`${ noYeahs } years`"></b-progress-bar>
            </b-progress>
          </b-col>
        </b-row>
      </b-container>
    </b-container>

    <b-container fluid="xl" class="mb-5 pt-5">
      <b-row>
        <b-col cols="12">
          <h3 class="text-center mb-3 font-weight-bold">Number of "yeahs" per year</h3>
        </b-col>
      </b-row>
      <b-row>
        <div class="number-of-yeah-charts number-of-yeah-per-company mx-auto">
          <canvas id="yeahsPerYearChart"></canvas>
        </div>
      </b-row>
    </b-container>

    <b-container fluid="xl" class="mb-5 pt-5">
      <b-row>
        <b-col cols="12">
          <h3 class="text-center mb-3 font-weight-bold">Number of "yeahs" per decade</h3>
        </b-col>
      </b-row>
      <b-row>
        <div class="number-of-yeah-charts number-of-yeah-per-company mx-auto">
          <canvas id="yeahsPerDecadeChart"></canvas>
        </div>
      </b-row>
    </b-container>

    <b-container fluid="xl" class="mb-5 pt-5">
      <b-row>
        <b-col cols="12">
          <h3 class="text-center mb-3 font-weight-bold">Number of "yeahs" per label company</h3>
        </b-col>
      </b-row>
      <b-row>
        <div class="number-of-yeah-charts number-of-yeah-per-company mx-auto">
          <canvas id="yeahsPerLabelCompanyChart"></canvas>
        </div>
      </b-row>
    </b-container>

    <b-container fluid="xl">
      <b-row>
        <b-col cols="12">
          <h3 class="text-center mb-5 font-weight-bold">the pillows all "yeah" songs</h3>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12">
          <div class="mx-auto">
            <b-form-input type="search" v-model="keyword" placeholder="Search a song, album or disc type"></b-form-input>
          </div>

          <b-pagination class="mt-5 mb-4" v-model="currentPage" pills :total-rows="rows" :per-page="perPage" aria-controls="thepillowsAllSongs-table" align="center"></b-pagination>

          <b-table id="thepillowsAllSongs-table" show-empty :items="items" :fields="tableColumns" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" responsive :per-page="perPage" :current-page="currentPage" :striped="true" :bordered="true" :filter="keyword" :keyword="keyword" @filtered="onFiltered"></b-table>

          <b-pagination class="mt-4 mb-5" v-model="currentPage" pills :total-rows="rows" :per-page="perPage" aria-controls="thepillowsAllSongs-table" align="center"></b-pagination>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid class="mb-5 pt-5">
      <b-row>
        <b-col cols="12">
          <h3 class="text-center mb-5 font-weight-bold">"Oh Yeah" examples compilation</h3>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12">
          <p>Examples of "oh yeah" catch-phrase compilation for understand the context of these charts, although present charts <strong><ins>actually only counting "yeah", and not "oh yeah"</ins></strong>.</p>
          <p>The video's original author below is <a href="https://www.youtube.com/user/sononamida/" target="_blank">sononamida</a>, so watch it directly from YouTube as appreciation.</p>
        </b-col>
      </b-row>

      <b-row class="justify-content-md-center row mb-5 mt-5">
        <b-col cols="6">
          <b-embed type="iframe" aspect="16by9" src="https://www.youtube.com/embed/Y08_zl7Qhdg" allowfullscreen></b-embed>
        </b-col>
        <b-col cols="6">
          <b-embed type="iframe" aspect="16by9" src="https://www.youtube.com/embed/z3mqVlymwVA" allowfullscreen></b-embed>
        </b-col>
      </b-row>
    </b-container>

    <div id="disqus_thread" class="comments container-fluid mb-5">
      <Disqus shortname="thepillows-ohyeah" :identifier="thepillows-ohyeah" url="https://thepillows-ohyeah.github.io/"></Disqus>
    </div>

    <footer class="bg-dark pt-4 pb-2">
      <b-container fluid>
        <b-row>
          <b-col cols="6">
            <p class="text-white">Source: My boredom due to COVID-19 crisis.</p>
          </b-col>
          <b-col cols="6">
            <p class="text-right text-white">With love from Spain</p>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
  import thepillowsAllSongs from "./thepillowsAllSongs.json";

  export default {
    data() {
      var sortOrders = {};
      thepillowsAllSongs.forEach((column) => {
        sortOrders[column] = 1;
      });
      return {
        tableColumns: [
          { key: '#', sortable: false },
          { key: 'songName', sortable: true },
          { key: 'albumName', sortable: true },
          { key: 'discType', sortable: true },
          { key: 'year', sortable: true },
          { key: 'numberOfYeah', sortable: true }
        ],
        thepillowsAllSongs: thepillowsAllSongs,
        sortKey: "",
        sortOrders: sortOrders,
        keyword: "",
        sortBy: "songName",
        sortDesc: false,
        perPage: 10,
        currentPage: 1,
        rows: thepillowsAllSongs.length,
        yeahMax: 30,
        someYeahCurrentValue: 24,
        yeahInRow: 16,
        noYeahs: 7
      }
    },
    filters: {
      capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    },
    computed: {
      items() {
        return this.keyword ? thepillowsAllSongs.filter(item => item.songName.toLowerCase().includes(this.keyword) || item.albumName.toLowerCase().includes(this.keyword) || item.discType.toLowerCase().includes(this.keyword)) : thepillowsAllSongs;
      }
    },
    methods: {
      onFiltered(filteredItems) {
        this.rows = filteredItems.length
        this.currentPage = 1;
      }
    }
  }
</script>

<style>
  a {
    color: #D4AF37;
  }

  a:hover {
    color: #D4AF37;
  }

  .the-pillows-background {
    height: 100vh;
    background-attachment: fixed;
    background-image: url("img/the-pillows.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .the-pillows-background-text {
    color: #fff;
    text-shadow: #000 1px 2px 1px;
  }

  .winning-emoji-size {
    font-size: 5rem;
  }

  .song-winner-size {
    font-size: 1rem;
  }

  .yeah-overall-emoji-size {
    font-size: 1.3rem;
  }

  .yeah-podium-container {
    width: 100px;
    height: 100px;
  }

  .yeah-podium-numbers {
    font-size: 3rem; 
  }

  .yeah-first-position {
    color: #D4AF37;
  }

  .yeah-second-position {
    color: #C0C0C0;
  }

  .yeah-third-position {
    color: #CB6D51;
  }

  .number-of-yeah-charts {
    position: relative;
  }

  .number-of-yeah-per-year,
  .number-of-yeah-per-decade,
  .number-of-yeah-per-company {
    width: 1000px;
    height: 600px;
  }

  .page-item.active .page-link {
    background-color: #ffbc09;
    border-color: #000;
    color: #000;
  }

  .page-link {
    color: #ffbc09;
  }

  .page-link:hover {
    background-color: #ffbc09;
    border-color: #ffbc09;
    color: #000;
  }

  .page-link:focus {
    box-shadow: 0 0 0 0 #fff;
  }

  #thepillowsAllSongs-table {
    text-align: center;
  }
  
  #thepillowsAllSongs-table thead {
    background-color: #ffbc09;
  }

  @media (max-width: 991px) {
    .col {
      flex-basis: auto;
    }
  }
</style>
