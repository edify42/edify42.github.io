<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <p>
      Tiny Hop is a company dedicated to building things that work.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Blog',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.main {
  max-width: 38rem;
  padding: 1rem;
  margin: auto;
  min-width: 400px; 
}
</style>
