<template>
  <div class="weather-list">
    <div class="listWeather">
      <div
        class="itemWeather point"
        v-for="(weatherDay, index) in weatherList"
        :key="index"
        @click="selectDay(index)"
      >
        <div class="tittle weight">
          
          {{formatDay(weatherDay.datetime)}}
        </div>
        <div class="content flex">
          <div class="temperature flex width-haf">
            <div class=" width-haf ">
              <img
                :src="
                  'https://www.weatherbit.io/static/img/icons/' +
                  weatherDay.weather.icon +
                  '.png'
                "
                alt=""
                class="icon-weather img"
              />
            </div>

            <div class="temp width-haf" :style="temp(weatherDay.temp)">{{ weatherDay.temp }} °C</div>
          </div>
          <div class="description width-haf">
            <span class="weight">{{ $code[weatherDay.weather.code] }}</span>
          </div>
        </div>
        <div class="detail" v-show="index == select">
          <div class="tempdatail flex">
            <div class="width-haf" title="Nhiệt độ cao nhất">
              <img
                class="icon-img"
                src="../../assets/thermometer-full-solid.svg"
                alt=""
              />Cao nhất: 
              <span class="weight" :style="temp(weatherDay.max_temp)">{{ weatherDay.max_temp }}°C</span>
            </div>
            <div class="width-haf" title="Nhiệt độ thấp nhất">
              <img
                class="icon-img"
                src="../../assets/thermometer-quarter-solid.svg"
                alt=""
              />Thấp nhất: 
              <span class="weight" :style="temp(weatherDay.min_temp)">{{ weatherDay.min_temp }}°C</span>
            </div>
          </div>

          <div class="app_temp">
            Cảm nhận: <span class="weight"  :style="temp(weatherDay.app_min_temp)">{{ weatherDay.app_min_temp }}°C</span> -
            <span class="weight"  :style="temp(weatherDay.app_max_temp)">{{ weatherDay.app_max_temp }}°C</span>
          </div>
          <div class="wind flex">
            <div class="width-haf" title="Tốc độ gió">
              <img class="icon-img" src="../../assets/wind-solid.svg" alt="" />Tốc độ gió: 
              <span class="weight">{{ weatherDay.wind_spd }} (m/s)</span>
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
          <div class="rain flex">
            <div class="width-haf" title="Khả năng mưa">
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
          <div class="clouds" title="Mật độ mây bao phủ">
            <img class="icon-img" src="../../assets/cloud-solid.svg" alt="" />Mức độ mây bao phủ: 
            <span class="weight">{{ weatherDay.clouds }}%</span>
          </div>
          <div class="flex">
            <div class="uv width-haf" title="Tia UV">
              <img class="icon-img" src="../../assets/ultraviolet.png" alt="" />UV: 
              <span class="weight">{{ weatherDay.uv }}</span>
            </div>
            <div class="ozone width-haf" title="Ozone">
              <img class="icon-img" src="../../assets/ozone.png" alt="" />Ozone: 
              <span class="weight">{{ weatherDay.ozone }}</span>
            </div>
          </div>
          
          <div class="sun flex">
            <div class="width-haf" title="Bình minh">
              <img class="icon-img" src="../../assets/morning.png" alt="" />Bình minh: 
              <span class="weight">{{ localTime(weatherDay.sunrise_ts) }}</span>
            </div>
            <div class="width-haf" title="Hoàng hôn">
              <img class="icon-img" src="../../assets/sunset.png" alt="" />Hoàng hôn: 
              <span class="weight">{{ localTime(weatherDay.sunset_ts) }}</span>
            </div>
          </div>
          <div class="moon flex">
            <div class="width-haf" title="Thời điểm trăng lên">
              <img class="icon-img" src="../../assets/moonrise.png" alt="" />Trăng lên: 
              <span class="weight">{{ localTime(weatherDay.moonrise_ts) }}</span>
            </div>
            <div class="width-haf" title="Thời điểm trăng tàn">
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
export default {
  created() {},
  name: "WeatherList",
  props: {
    msg: String,
  },
  computed: {
    weatherList() {
      return this.$store.getters.getListWeather;
    },
  },
  data() {
    return {
      select: null,
    };
  },
  methods: {
    localTime(time) {
      return moment.unix(time).format("HH:mm");
    },
    selectDay(index) {
      if (this.select == index) this.select = null;
      else this.select = index;
    },
    formatDay(time){
      return moment(time).lang('vi').format("dd, DD/MM/YYYY");

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
  .weather-list {
    width: 100%;
  }
  .listWeather {
    max-height: calc(50vh - 90px) !important;
    margin-left: 48px !important;
  }
}
@media (max-width: 1100px) and (min-width: 750px) {
  .weather-list {
    width: 40%;
  }
}
@media (min-width: 1100px) {
  .weather-list {
    width: 50%;
  }
}
.weight{
  font-weight: 600;
}
.point {
  cursor: pointer;
}
.weather-list {
  /* background-color: coral; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0px 24px 0px;
  box-sizing: border-box;
}
.listWeather {
  /* background-color: blue; */
  border-radius: 10px;
  width: 100%;
  max-height: calc(100vh - 146px);
  min-height: 580px;
  overflow-y: scroll;
  margin-right: 48px;
  margin-left: 24px;
}
/* ẩn thanh cuộn dọc */
::-webkit-scrollbar {
  display: none;
}
.itemWeather {
  padding: 12px 32px 2px 32px;
  background-color: rgba(253, 253, 253, 0.9);
  border-top: 1px solid rgb(88, 88, 110);
}
.itemWeather:hover {
  background-color: white;
}

.tittle {
  display: flex;
  align-items: flex-start;
  font-weight: 600;
}
.content {
  display: flex;
  align-items: center;
  text-align: left;
}
.img {
  min-width: 46px;
  min-height: 46px;
  max-width: 46px;
  max-height: 46px;
}
.icon-img {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}
.temp {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  min-width: 100px;
}
.description {
  padding: 8px 0;
  font-size: 14px;
}
.max-min {
  display: -webkit-inline-box;
}

.temperature {
  text-align: left;
}
.width-haf {
  width: 50%;
}

.detail {
  font-size: 16px;
  text-align: left;
  padding: 0 4px;
}
.detail div {
  padding: 6px 0;
}

.width-haf {
  width: 50%;
}
.flex {
  display: flex;
}
</style>
