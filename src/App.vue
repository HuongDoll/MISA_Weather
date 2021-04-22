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
  background-color: rgb(68, 68, 175);
  width: 100%;
  height: 100vh;
}
</style>
