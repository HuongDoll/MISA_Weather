<template>
  <div id="app">
    <Tittle />
    <Content />
  </div>
</template>

<script>
import Tittle from './components/ViewWeather/Tittle'
import Content from './components/ViewWeather/Content'

export default {
  name: 'App',
  created() {
    // this.getApi();
    this.$store.dispatch('getWeather');
  },
  components: {
    Tittle,
    Content
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(to bottom, #2b1ee6 0%, #c0bfec 100%);
  width: 100%;
  min-height: 100vh;
}
</style>
