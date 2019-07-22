<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <h2>
      Welcome to Tiny Hop!
    </h2>
    <p>
      We specialise in small business marketing strategies on WeChat and Cloud consulting services.
    </p>
    <h3>Services</h3>
    <ul>
      <li>Marketing and Strategy on WeChat social media platform</li>
      <li>Technology and process modernisation</li>
      <li>Cloud build and deployment</li>
    </ul>
    <h3>Technology</h3>
    <ul>
      <li><a href="https://www.wechat.com" target="_blank" rel="noopener">WeChat</a></li>
      <li><a href="https://kubernetes.io/" target="_blank" rel="noopener">Kubernetes</a></li>
      <li><a href="https://aws.amazon.com/" target="_blank" rel="noopener">AWS</a></li>
    </ul>
    <h3>Demos</h3>
    <p>
      Here are some things we've worked on in the past. Some small implementation details 
      and challenges can be found in <router-link to="/blog"> our blog posts.</router-link>
    </p>
    <p>
      
     </p>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data: function() {
      return {
          msg: "This website is under development"
      }
  },
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
  margin: 10px 0px;
}
a {
  color: #42b983;
}

p {
  padding: 5px 0 5px 0;
}

.main {
  max-width: 50rem;
  padding: 1.5rem;
  margin: auto;
}
</style>
