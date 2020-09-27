<template>
  <div class="about">
    <div class="container">
      <h1>Soroush Alinia</h1>
      <h2>Full Stack Web Developer (In Training)</h2>
      <h3>For more project you can visit my GitHub.</h3>
      <br />
      <br />
      <div class="container socials">
        <div class="socials-logo">
          <a href="https://www.instagram.com/soroushalinia"><img  style="width: 4rem" src="../assets/instagram-logo.webp" alt="InstaLogo"></a>
        </div>
        <br />
        <div class="socials-logo">
          <a href="https://www.github.com/soroushalinia"><img  style="width: 4rem" src="../assets/github-logo.png" alt="GithubLogo"></a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

import Footer from "@/components/Footer.vue"

export default {
  name: "About",
  components: {
    Footer
  }
};
</script>

<style scoped>
.about {
  height: 100vh;
  color: white;
}
.socials {
  display: flex;
  justify-content: center;
  align-items: center;
}
.socials-logo {
  padding: 0.25rem;
  margin: 0.25rem;
}

</style>
