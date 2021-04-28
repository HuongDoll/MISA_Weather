<template>
  <div id="app" :style="background">
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
    let location = {
      "lat" : "21.0278",
      "lon" : "105.8342"
    }
    this.$store.dispatch('getWeather', location);
  },
  computed: {
    background(){
      var today = this.$store.getters.getImg;
      console.log(today);
      let bgImage = require('@/assets/bg/'+today+'.jpg');
      return {
        backgroundImage:`url("${bgImage}")`,
        }
    },
  },
  data() {
    return {
    };
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
  background-image: url('assets/bg/2.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
}
</style>
