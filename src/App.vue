<template>
  <div id="main">
    <b-navbar
    toggleable="md"
    type="light"
    variant="light">
    <b-navbar-brand to="/">TINY HOP</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to='/blog'>Blog</b-nav-item>
      <b-nav-item to='/contact'>Contact Us</b-nav-item>
    </b-navbar-nav>
    <b-nav-form class="right">
      <b-form-input class="mr-sm-2" placeholder="Nothing to search"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
  </b-navbar>
    <img class="center" alt="Vue logo" src="./assets/brand.png">
    <router-view />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {

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
