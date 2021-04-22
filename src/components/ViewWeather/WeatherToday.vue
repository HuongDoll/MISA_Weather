<template>
  <div class="weather-today">
    <!-- <img src="https://www.weatherbit.io/static/img/icons/c03d.png" alt="" > -->
    <div class="weather-content">
      <div class="tittle">Hôm nay {{ weatherDay.datetime }}</div>
      <div class="content">
        <img
          :src="
            'https://www.weatherbit.io/static/img/icons/' +
            weatherDay.weather.icon +
            '.png'
          "
          alt=""
          class="icon-weather"
        />
        <span class="temp">{{ weatherDay.temp }} °C</span>
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
  name: "WeatherToday",
  props: {
    msg: String,
  },
  data() {
    return {
      weatherDay: "",
    };
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
          vm.weatherDay = response.data.data[0];
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
.weather-today {
  height: 100%;
  width: 50%;
  background-color: darkgray;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 50px;
  height: 50px;
}

</style>
