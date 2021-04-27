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
            <div class="temp">{{ weatherDay.temp }} °C</div>
            <div class="tempdatail" title="Nhiệt độ cao nhất">
              <img
                class="icon-img"
                src="../../assets/thermometer-full-solid.svg"
                alt=""
              />
              {{ weatherDay.max_temp }}°C
            </div>
            <div title="Nhiệt độ thấp nhất">
              <img
                class="icon-img"
                src="../../assets/thermometer-quarter-solid.svg"
                alt=""
              />
              {{ weatherDay.min_temp }}°C
            </div>
          </div>
        </div>
        <div class="description">{{$code[weatherDay.weather.code]}}</div>
        <div class="detail">
          <div class="app_temp">
            Cảm giác như: {{ weatherDay.app_min_temp }}°C -
            {{ weatherDay.app_max_temp }}°C
          </div>
          <div class="wind">
            <div class="width-haf" title="Vận tốc gió">
              <img class="icon-img" src="../../assets/wind-solid.svg" alt="" />
              {{ weatherDay.wind_spd }} (m/s)
            </div>
            <div class="width-haf" title="Gió giật">
              <img
                class="icon-img"
                src="../../assets/long-arrow-alt-right-solid.svg"
                alt=""
              />
              {{ weatherDay.wind_gust_spd }}(m/s)
            </div>
          </div>
          <div class="rain">
            <div class="width-haf" title="Xác suất mưa">
              <img
                class="icon-img"
                src="../../assets/cloud-showers-heavy-solid.svg"
                alt=""
              />
              {{ weatherDay.pop }}%
            </div>
            <div class="width-haf" title="Lượng mưa">
              <img class="icon-img" src="../../assets/tint-solid.svg" alt="" />
              {{ weatherDay.precip }} mm
            </div>
          </div>
          <div class="clouds" title="Mức độ bao phủ của mây">
            <img class="icon-img" src="../../assets/cloud-solid.svg" alt="" />
            {{ weatherDay.clouds }}%
          </div>
          <div class="uv" title="Tia uv">
            <img class="icon-img" src="../../assets/ultraviolet.png" alt="" />
            {{ weatherDay.uv }}
          </div>
          <div class="ozone" title="Ozone">
            <img class="icon-img" src="../../assets/ozone.png" alt="" />
            {{ weatherDay.ozone }}
          </div>
          <div class="sun">
            <div class="width-haf" title="Bình minh">
              <img class="icon-img" src="../../assets/morning.png" alt="" />
              {{ localTime(weatherDay.sunrise_ts) }}
            </div>
            <div class="width-haf" title="Hoàng hôn">
              <img class="icon-img" src="../../assets/sunset.png" alt="" />
              {{ localTime(weatherDay.sunset_ts) }}
            </div>
          </div>
          <div class="moon">
            <div class="width-haf" title="Thời điểm trăng lên">
              <img class="icon-img" src="../../assets/moonrise.png" alt="" />
              {{ localTime(weatherDay.moonrise_ts) }}
            </div>
            <div class="width-haf" title="Thời điểm trăng lặn">
              <img class="icon-img" src="../../assets/moonset.png" alt="" />
              {{ localTime(weatherDay.moonset_ts) }}
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
    // translateDescription(text) {
    //   translate(text, { from: "en", to: "vi" })
    //     .then((res) => {
    //       console.log(text)
    //       return res.text;
          
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    // },
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
  background-color: #fff;
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
  font-size: 16px;
  font-weight: 700;
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
