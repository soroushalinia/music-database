<template>
  <div>
    <SongCard />
    <Footer />
  </div>
</template>

<script>
import SongCard from "@/components/SongCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "SongPage",
  components: {
    SongCard,
    Footer
  }
};
</script>

<style scoped lang="scss">
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
</style>
