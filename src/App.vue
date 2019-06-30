<template>
  <div id="app">
    <nav>
      <router-link id="route" to='/'> Home </router-link>
      <router-link id="route" to='/blog'> Blog </router-link>
      <router-link to='/contact'> Contact Us </router-link>
    </nav>
    <img alt="Vue logo" src="./assets/brand.png">
    <router-view />
  </div>
</template>

<script>

export default {

}
</script>

<style>
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
</style>
