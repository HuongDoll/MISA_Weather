<template>
  <div class="weather-list">
    <div class="listWeather" v-for="(weatherDay, index) in weatherList" :key="index">
        <div class="tittle">{{weatherDay.datetime}}</div>
        <div class="content">
            <img :src="'https://www.weatherbit.io/static/img/icons/' + weatherDay.weather.icon + '.png'" alt="" class="icon-weather">
            <span class="temp">{{weatherDay.temp}} °C</span>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    this.getApi();
  },
  name: "WeatherList",
  props: {
    msg: String,
  },
  data() {
      return {
          weatherList : "",
      }
  },
  methods: {
    getApi() {
        var vm = this;
        const options = {
        method: "GET",
        url: " https://api.weatherbit.io/v2.0/forecast/daily",
        params: { lat: "21.0278", lon: "105.8342", days : 16, key: "7d2ecceb4a7b43799bfa309c965de5eb"},
        
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          vm.weatherList = response.data.data.slice(0,8);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weather-list{
    height: 100%;
    width: 50%;
    background-color: coral;
}
.listWeather{
    display: flex;
}
img {
    width: 50px;
    height: 50px;
}
</style>
