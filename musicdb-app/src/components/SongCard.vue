<template>
  <div>
    <div
      v-if="alertStatus === 'true'"
      class="container alert alert-light"
      style="width:90%"
      role="alert"
    >
      {{ alertText }}
    </div>
    <div @submit.prevent="searchSong" class="container song-search">
      <h3>Search Here!</h3>
      <br />
      <form>
        <div class="row">
          <div class="search-col col-sm d-flex justify-content-center">
            <input
              v-model="songNameSearch"
              type="text"
              class="form-control "
              placeholder="Song Name"
            />
          </div>
          <div class="search-col col-sm d-flex justify-content-center">
            <input
              v-model="songArtistSearch"
              type="text"
              class="form-control "
              placeholder="Singer / Band"
            />
          </div>
          <div class="search-col col-sm d-flex justify-content-center">
            <button class="btn btn-success">
              <span class="btn-text">Search your Song!</span>
            </button>
          </div>
        </div>
        <br />
      </form>
      <hr v-if="searchIsDone === 'true'" style="background-color:white" />
    </div>
    <div v-if="searchIsDone === 'true'" class="container music-card">
      <div class="container d-flex">
        <div class="d-flex align-items-start">
          <div class="card music-info" style="width: 18rem;">
            <img
              class="card-img-top"
              :src="songData.songCoverArt"
              alt="Song Cover Art"
            />
            <div class="card-body">
              <h5 class="card-title">
                {{ songData.songName }} - {{ songData.songArtist }}
              </h5>
              <p class="card-text">{{ songData.songDescription }}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Artist: {{ songData.songArtist }}</li>
              <li class="list-group-item">Genre: {{ songData.songGenre }}</li>
              <li class="list-group-item">Album: {{ songData.songAlbum }}</li>
              <li class="list-group-item">
                Release: {{ songData.songReleaseYear }}
              </li>
            </ul>
            <div class="card-body">
              <a @click="onEdit" href="#" class="card-link">Edit Song</a>
              <a @click="onDelete" href="#" class="card-link">Delete Song</a>
            </div>
          </div>
        </div>
        <br />
        <div v-if="isLyricsAvailable === 'true'">
          <div class="container music-lyrics">
            <br />
            <h3>Lyrics</h3>
            <pre>{{ songData.songLyrics }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router/";
import axios from "axios";
let axiosDefaults = require("axios/lib/defaults");
axiosDefaults.baseURL = "http://localhost:8000";

export default {
  name: "SongCard",
  data() {
    return {
      CoverArtSrc: "",
      songData: {
        _id: "",
        songName: "",
        songArtist: "",
        songCoverArt: "",
        songAlbum: "",
        songReleaseYear: "",
        songGenre: "",
        songDescription: "",
        songLyrics: ""
      },
      songNameSearch: "",
      songArtistSearch: "",
      searchIsDone: "",
      isLyricsAvailable: "",
      alertStatus: "",
      alertText: ""
    };
  },
  methods: {
    onDelete() {
      axios
        .delete("/api/deleteSong/" + this.songData._id)
        .then(
          (this.alertStatus = "true"),
          (this.alertText = "Song Deleted Successfully!")
        );
    },
    onEdit() {
      router.push({
        path: "songEdit",
        query: {
          editMode: "true",
          songID: this.songData._id
        }
      });
    },
    searchSong() {
      this.songData._id = null;
      this.songData.songName = null;
      this.songData.songArtist = null;
      this.songData.songAlbum = null;
      this.songData.songLyrics = null;
      this.songData.songReleaseYear = null;
      this.songData.songGenre = null;
      this.songData.songDescription = null;
      this.songData.songCoverArt = null;
      axios
        .get(
          "/api/findSong/" + this.songNameSearch + "_" + this.songArtistSearch
        )
        .then(response => {
          console.log(response.data.length == 0);
          if (response.data.length == 0) {
            this.alertStatus = "true";
            this.alertText = "Song Not Found! Please Search Another Song.";
            (this.searchIsDone = "false"), (this.isLyricsAvailable = "false");
          } else {
            this.alertStatus = "false";
            this.songData = response.data[0];
            this.searchIsDone = "true";
            if (this.songData.songLyrics === "") {
              this.isLyricsAvailable = "false";
            } else {
              this.isLyricsAvailable = "true";
            }
          }
        });
    }
  }
};
</script>

<style scoped lang="scss">
.music-card {
  width: 100%;
  padding: 2rem;
}

.music-info {
  height: 100%;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}

.music-lyrics {
  margin: 0.5rem;
  background-color: transparent;
  color: white;
  text-align: left;
  font-size: 1.25rem;
}

.song-search {
  color: white;
}
.search-col {
  margin: 1rem;
}

.btn {
  width: 15rem;
  border: none;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(153, 103, 186, 1) 41.2%,
    rgba(0, 113, 227, 1) 90%
  );
  box-shadow: 10px 10px 15px -13px rgba(0, 0, 0, 0.75);
}
.btn:active {
  width: 15rem;
  border: none;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(153, 103, 186, 1) 41.2%,
    rgba(0, 113, 227, 1) 90%
  );
  box-shadow: 10px 10px 15px -13px rgba(0, 0, 0, 0.75);
}
.btn:focus {
  width: 15rem;
  border: none;
}

input {
  width: 100%;
}
pre {
  margin: 0.5rem;
  color: white;
}
</style>
