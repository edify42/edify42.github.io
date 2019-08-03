<template>
  <div id="main">
    <b-navbar
    toggleable="lg"
    type="light"
    variant="light">
    <b-navbar-brand href="#">TINY HOP</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/services">Services</b-nav-item>
      <b-nav-item to='/blog'>Blog</b-nav-item>
      <b-nav-item to='/contact'>Contact Us</b-nav-item>
    </b-navbar-nav>
    <b-nav-form class="ml-auto">
      <b-form-input class="mr-sm-2" size="sm" placeholder="Nothing to search"></b-form-input>
      <b-button variant="outline-success" size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
    </b-collapse>
  </b-navbar>
    <img class="center" alt="Vue logo" src="./assets/brand.png">
    <router-view />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: "Tiny Hop",
  created () {
    document.title = "Tiny Hop";
  }
}
</script>

<style>
.center {
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.right {
  position: absolute;
  right: 0px;
  padding-right: 10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#route {
  background-color: bisque;
  padding: 10px;
  border: 2px;
  border-color: black;
}

.main {
  max-width: 50rem;
  padding: 1.5rem;
  margin: auto;
}
</style>
