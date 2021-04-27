<template>
  <div class="content">
    <WeatherToday />
    <WeatherList />
  </div>
</template>

<script>
import WeatherToday from "./WeatherToday"
import WeatherList from "./WeatherList"

export default {
  created() {
  },
  components: {
    WeatherToday,
    WeatherList
  },
  name: "Tittle",
  props: {
    msg: String,
  },
  methods: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
    width: 100%;
    display: flex;
    box-sizing: border-box;
}
@media (max-width:750px){
  .content{
    display: block;
  }

}
</style>
