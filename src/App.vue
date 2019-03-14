<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{$store.state.name}}</p>
    <router-view class="one" name="left"/>
    <router-view class="two" name="right"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    //   store: this.$store
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
