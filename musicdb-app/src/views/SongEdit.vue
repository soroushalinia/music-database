<template>
  <div class="container song-form">
    <div v-if="savedSong === 'true'" class="alert alert-light" role="alert">
      Song Data Saved on Server! Return to
      <router-link id="song-route-link" to="/Song">Search Page</router-link>
    </div>
    <form @submit.prevent="onSubmit" enctype="multipart/form-data">
      <div class="form-row">
        <div class="col-md-6">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="songNameLabel">Song Name</span>
            </div>
            <input
              v-model="form.songName"
              type="text"
              class="form-control"
              aria-label="Song Name"
              aria-describedby="songNameLabel"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="songArtistLabel"
                >Song Artist</span
              >
            </div>
            <input
              v-model="form.songArtist"
              type="text"
              class="form-control"
              aria-label="Song Artist"
              aria-describedby="songArtistLabel"
            />
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-6">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="songAlbumLabel"
                >Song Album</span
              >
            </div>
            <input
              v-model="form.songAlbum"
              type="text"
              class="form-control"
              aria-label="Song Album"
              aria-describedby="songAlbumLabel"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="songGenreLabel"
                >Song Genre</span
              >
            </div>
            <input
              v-model="form.songGenre"
              type="text"
              class="form-control"
              aria-label="Song Genre"
              aria-describedby="songGenreLabel"
            />
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-6">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="songReleaseYear"
                >Song Release Year</span
              >
            </div>
            <input
              v-model="form.songReleaseYear"
              type="text"
              class="form-control"
              aria-label="Song Release Year"
              aria-describedby="songReleaseYearLabel"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="songCoverArtLabel"
                >Song Cover Art</span
              >
            </div>
            <input
              v-model="form.songCoverArt"
              type="text"
              class="form-control"
              aria-label="Song Cover Art"
              aria-describedby="songCoverArtLabel"
            />
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-6">
          <div class="input-group big-input">
            <div class="input-group-prepend">
              <span class="input-group-text">Song Description</span>
            </div>
            <textarea
              v-model="form.songDescription"
              class="form-control"
              aria-label="Song Description"
            ></textarea>
          </div>
        </div>
        <br />
        <div class="col-md-6">
          <div class="input-group big-input">
            <div class="input-group-prepend">
              <span class="input-group-text">Song Lyrics</span>
            </div>
            <textarea
              v-model="form.songLyrics"
              class="form-control"
              aria-label="Song Lyrics"
            ></textarea>
          </div>
        </div>
      </div>
      <br />
      <div class="form-row">
        <div class="col-md-12">
          <button type="submit" class="btn btn-success">Submit song</button>
        </div>
      </div>
      <Footer />
    </form>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import axios from "axios";
let axiosDefaults = require("axios/lib/defaults");
axiosDefaults.baseURL = "http://localhost:8000";

export default {
  name: "SongEdit",
  components: {
    Footer
  },
  data() {
    return {
      file: "",
      form: {
        songName: "",
        songArtist: "",
        songAlbum: "",
        songGenre: "",
        songReleaseYear: "",
        songDescription: "",
        songLyrics: "",
        songCoverArt: ""
      },
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
      savedSong: ""
    };
  },
  mounted() {
    if (this.$route.query.editMode == "true") {
      axios
        .get("/api/getSongById/" + this.$route.query.songID)
        .then(response => {
          this.form.songName = response.data.songName;
          this.form.songArtist = response.data.songArtist;
          this.form.songAlbum = response.data.songAlbum;
          this.form.songGenre = response.data.songGenre;
          this.form.songReleaseYear = response.data.songReleaseYear;
          this.form.songDescription = response.data.songDescription;
          this.form.songLyrics = response.data.songLyrics;
          this.form.songCoverArt = response.data.songCoverArt;
        });
    }
  },
  methods: {
    onSubmit() {
      if (this.$route.query.editMode == "true") {
        const songFull = {
          id: this.$route.query.songID,
          songName: this.form.songName,
          songArtist: this.form.songArtist,
          songAlbum: this.form.songAlbum,
          songGenre: this.form.songGenre,
          songReleaseYear: this.form.songReleaseYear,
          songDescription: this.form.songDescription,
          songLyrics: this.form.songLyrics,
          songCoverArt: this.form.songCoverArt
        };
        axios
          .post("/api/updateSong/", songFull)
          .then(res => console.log(res))
          .catch(error => console.log(error));
        this.savedSong = "true";
      } else {
        if (this.form.songCoverArt === "") {
          this.form.songCoverArt =
            "https://www.iconsdb.com/icons/preview/black/square-xxl.png";
        }
        const songFull = {
          songName: this.form.songName,
          songArtist: this.form.songArtist,
          songAlbum: this.form.songAlbum,
          songGenre: this.form.songGenre,
          songReleaseYear: this.form.songReleaseYear,
          songDescription: this.form.songDescription,
          songLyrics: this.form.songLyrics,
          songCoverArt: this.form.songCoverArt
        };
        console.log("Before Axios");
        axios
          .post("/api/createSong/", songFull)
          .then(res => console.log(res))
          .catch(error => console.log(error));
        this.savedSong = "true";
      }
    }
  }
};
</script>

<style scoped>
.song-form {
  color: white;
}
</style>
