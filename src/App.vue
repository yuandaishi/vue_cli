<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{store.state.name}}</p>
    <router-link to='HelloWorld'><p>go to hello world</p></router-link>
    <router-link to="message"><p>go to hello message</p></router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      store: this.$store
    }
  }
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
</style>
