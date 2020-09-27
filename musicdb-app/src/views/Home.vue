<template>
  <div class="home">
    <Header />
    <br />
    <br />
    <div class="container alert alert-success">
      <strong
        >You can go to our
        <router-link class="route-link" to="/Song"
          >"Search a Song" Page</router-link
        >
        in order to find songs</strong
      >
    </div>
    <br />
    <br />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.home {
  color: white;
}
.route-link {
  color: green;
}
</style>
