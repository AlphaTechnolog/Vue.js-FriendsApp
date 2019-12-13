<template>
  <div id="app">
    <div id="navbar">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Friends App</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/saludarAmigos">Greet Friends</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/agregarAmigos">Add Friends</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/eliminarAmigos">Delete Friends</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
  #navbar a.router-link-exact-active {
    color: white;
  }
</style>
