<template>
  <div id="app">
    <br />
    <div class="container overflow-auto" id="global-navbar">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#"><router-link id="main-route-link" to="/">MusicDB</router-link></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list" aria-controls="navbar-list" aria-expanded="false" aria-label="Toggle navigation">
          <span class="menu">Menu</span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-list">
          <div class="navbar-nav ml-auto">
            <a class="nav-link active" href="#"><router-link class="route-link" to="/Song">Search a Song</router-link></a>
            <a class="nav-link active" href="#"><router-link class="route-link" to="/SongEdit">Add a song</router-link></a>
            <a class="nav-link active" href="#"><router-link class="route-link" to="/about">About us</router-link></a>
          </div>
        </div>
      </nav>
      <hr id="navbar-line" />
      <br />
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  background-size: fill;
  font-family: 'Cairo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient( 65.5deg,  rgba(23,205,205,1) -15.1%, rgba(23,25,95,1) 71.5% );

}

.global-navbar {
  padding: 0;
  margin: 0.25rem;
}

.navbar {
  padding: 0;
  margin: 0;
  background-color: transparent;
}

.menu {
  color:white;
}

.navbar-toggler:focus, .navbar-toggler:active {
  outline: none !important;
  box-shadow: none !important;
}


#main-route-link {
  font-weight: 900;
  color: white;
}

.route-link {
  font-weight: bold;
  color: white;
}

#navbar-line {
  width: 100%;
  background-color: white;
}
</style>
