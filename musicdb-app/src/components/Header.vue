<template>
  <div class="container overflow-auto" id="header">
    <h2>MusicDB</h2>
    <p style>
      Find everything about your favorite song! This app allows you to search
      and view every details about your song like genre, year of release and you
      might even find the lyrics! You can also add info about a song you like if
      it is not in our database.
    </p>
    <br />
    <h2>Features</h2>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h4>Responsive</h4>
          <h5>
            You can use this web app both in mobile and pc without any problem.
          </h5>
        </div>
        <div class="col-sm">
          <h4>API</h4>
          <h5>
            MusicDB API is a nice way for you to use our database in your
            applications
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
#header {
  font-size: 1.25rem;
  width: 85%;
  color: white;
}
</style>
