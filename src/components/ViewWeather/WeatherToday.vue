<template>
  <div class="weather-today">
    <!-- <img src="https://www.weatherbit.io/static/img/icons/c03d.png" alt="" > -->
    <div class="weather-content">
      <div class="weather">
        <div class="tittle">Hôm nay ({{ formatDay(weatherDay.datetime) }})</div>
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
          <div class="temperature">
            <div class="temp" :style="temp(weatherDay.temp)">{{ weatherDay.temp }} °C</div>
            <div class="tempdatail" title="Nhiệt độ cao nhất">
              <img
                class="icon-img"
                src="../../assets/thermometer-full-solid.svg"
                alt=""
              />Cao nhất: <span class="weight " :style="temp(weatherDay.max_temp)">{{ weatherDay.max_temp }}°C</span>
            </div>
            <div title="Nhiệt độ thấp nhất">
              <img
                class="icon-img"
                src="../../assets/thermometer-quarter-solid.svg"
                alt=""
              />Thấp nhất: <span class="weight" :style="temp(weatherDay.min_temp)">{{ weatherDay.min_temp }}°C</span>
            </div>
          </div>
        </div>
        <div class="description">{{$code[weatherDay.weather.code]}}</div>
        <div class="detail">
          <div class="app_temp">
            Cảm nhận: <span class="weight" :style="temp(weatherDay.app_min_temp)">{{ weatherDay.app_min_temp }}°C</span> - <span class="weight" :style="temp(weatherDay.app_max_temp)">{{ weatherDay.app_max_temp }}°C</span>
          </div>
          <div class="wind">
            <div class="width-haf" title="Vận tốc gió">
              <img class="icon-img" src="../../assets/wind-solid.svg" alt="" />Tốc độ gió: <span class="weight">{{ weatherDay.wind_spd }} (m/s)</span>
            </div>
            <div class="width-haf" title="Gió giật">
              <img
                class="icon-img"
                src="../../assets/long-arrow-alt-right-solid.svg"
                alt=""
              />Giật:
              <span class="weight">{{ weatherDay.wind_gust_spd }}(m/s)</span>
            </div>
          </div>
          <div class="rain">
            <div class="width-haf" title="Xác suất mưa">
              <img
                class="icon-img"
                src="../../assets/cloud-showers-heavy-solid.svg"
                alt=""
              />Khả năng mưa:
              <span class="weight">{{ weatherDay.pop }}%</span>
            </div>
            <div class="width-haf" title="Lượng mưa">
              <img class="icon-img" src="../../assets/tint-solid.svg" alt="" />Lượng mưa:
              <span class="weight">{{ weatherDay.precip }} mm</span>
            </div>
          </div>
          <div class="clouds" title="Mức độ bao phủ của mây">
            <img class="icon-img" src="../../assets/cloud-solid.svg" alt="" />Mức độ bao phủ của mây: 
            <span class="weight">{{ weatherDay.clouds }}%</span>
          </div>
          <div class="moon">
            <div class="uv width-haf" title="Tia uv">
              <img class="icon-img" src="../../assets/ultraviolet.png" alt="" />UV: 
              <span class="weight">{{ weatherDay.uv }}</span>
            </div>
            <div class="ozone width-haf" title="Ozone">
              <img class="icon-img" src="../../assets/ozone.png" alt="" />Ozone: 
              <span class="weight">{{ weatherDay.ozone }}</span>
            </div>
          </div>
            
          <div class="sun">
            <div class="width-haf" title="Bình minh">
              <img class="icon-img" src="../../assets/morning.png" alt="" />Bình minh: 
              <span class="weight">{{ localTime(weatherDay.sunrise_ts) }}</span>
            </div>
            <div class="width-haf" title="Hoàng hôn">
              <img class="icon-img" src="../../assets/sunset.png" alt="" />Hoàng hôn: 
              <span class="weight">{{ localTime(weatherDay.sunset_ts) }}</span>
            </div>
          </div>
          <div class="moon">
            <div class="width-haf" title="Thời điểm trăng lên">
              <img class="icon-img" src="../../assets/moonrise.png" alt="" />Trăng lên: 
              <span class="weight">{{ localTime(weatherDay.moonrise_ts) }}</span>
            </div>
            <div class="width-haf" title="Thời điểm trăng lặn">
              <img class="icon-img" src="../../assets/moonset.png" alt="" />Trăng tàn: 
              <span class="weight">{{ localTime(weatherDay.moonset_ts) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment-timezone";
// const translate = require("google-translate-api");
export default {
  name: "WeatherToday",
  props: {
    msg: String,
  },
  computed: {
    weatherDay() {
      return this.$store.getters.getWeatherToday;
    },
  },
  data() {
    return {};
  },
  methods: {
    localTime(time) {
      return moment.unix(time).format("HH:mm");
    },
    formatDay(time) {
      return moment(time).lang("vi").format("dd, DD/MM/YYYY");
    },
    temp(temp){
      if(temp<22){
        return {
          color : 'blue'
        }
      }
      if(temp > 27){
        return {
          color : 'red',
        }
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 750px) {
  .weather-today {
    width: 100%;
  }
  .weather-content {
    height: calc(50vh - 90px) !important;
    margin-right: 48px !important;
  }
}
@media (max-width: 1100px) and (min-width: 750px) {
  .weather-today {
    width: 60%;
  }
}
@media (min-width: 1100px) {
  .weather-today {
    width: 50%;
  }
}
.weight{
  font-weight: 600;
}
.weather-today {
  /* background-color: darkgray; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0px 24px 0px;
  box-sizing: border-box;
}
.weather-content {
  border-radius: 10px;
  width: 100%;
  height: calc(100vh - 146px);
  min-height: 580px;
  background-color: rgba(253, 253, 253, 0.9);
  align-items: center;
  padding: 24px;
  box-sizing: border-box;
  margin-right: 24px;
  margin-left: 48px;
}
.weather {
  width: 100%;
  text-align: left;
}
.content {
  display: flex;
  align-items: center;
}

img {
  width: 160px;
  height: 160px;
  margin-right: 16px;
}
.icon-img {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
.temperature {
  text-align: left;
}
.tittle {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
}
.temp {
  font-size: 50px;
  font-weight: 600;
  padding-bottom: 16px;
}
.detail {
  font-size: 16px;
}
.detail div {
  padding: 6px 0;
}
.description {
  padding: 8px 0;
  font-size: 20px;
  font-weight: 700;
  color: rgb(148, 42, 42);
}
.width-haf {
  width: 50%;
}
.rain {
  display: flex;
}
.wind {
  display: flex;
}
.sun {
  display: flex;
}
.moon {
  display: flex;
}
</style>
