<template>
  <div class="tittle">
    <div class="cityName">Thời tiết {{city}}</div>
    <!-- <input type="text" name="" id="" placeholder="Tìm kiếm địa điểm"> -->
    <div class="searchCity">
      <autocomplete
        :search="search"
        placeholder="Tìm kiếm địa điểm"
        aria-label="Tìm kiếm địa điểm"
        :get-result-value="getResultValue"
        @submit="handleSubmit"
      ></autocomplete>
    </div>
  </div>
</template>

<script>
import Autocomplete from '@trevoreyre/autocomplete-vue'
import axios from "axios";
// const wikiUrl = 'https://en.wikipedia.org'
// const params = 'action=query&list=search&format=json&origin=*'
export default {
  computed:{
    city(){
      return this.$store.getters.getCity
    }
  },
  name: "Tittle",
  props: {
    msg: String,
  },
  components: {
    Autocomplete
  },
  
  methods: {
    search(input) {
      // const url = `${wikiUrl}/w/api.php?${
      //   params
      // }&srsearch=${encodeURI(input)}`
      const options = {
        method: 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
        params: {namePrefix: input},
        headers: {
          'x-rapidapi-key': '916fd437b1mshbb1fec457b69aacp11a647jsn12d0b44cc7ba',
          'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
        }
      };

      return new Promise(resolve => {
        if (input.length < 3) {
          return resolve([])
        }

        axios.request(options).then(function (response) {
          console.log(response.data.data);
          resolve(response.data.data)
        }).catch(function (error) {
          console.error(error);
        });
      })
      
    },

    
    getResultValue(result) {
      return result.name
    },

    // Open the selected article in
    // a new window
    handleSubmit(result) {
      console.log(result)
      let location = {
        "lat" : result.latitude,
        "lon" : result.longitude
      }
      var city = result.name + "/" +result.country;
      this.$store.dispatch('getWeather', location);
      this.$store.dispatch('getCity', city);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchCity {
  width: calc(50% - 72px);
  margin: 0 auto;
  text-align: left;
  font-size: 14px;
  position: absolute;
  right: 48px;
}
@media (max-width: 1100px) {
  .searchCity {
    width: calc(40% - 72px) !important;
  }
}

ul {
  background-color: #fff;
}
.tittle {
  width: 100%;
  height: 80px;
  background-color: rgba(253, 253, 253, 0.9);
  display: flex;
  align-items: center;
}
.tittle .cityName {
  font-size: 24px;
  font-weight: 700;
  padding: 16px 16px 16px 48px;
}
/* input{
    width: calc(50% - 88px);
    height: 40px;
    position: absolute;
    right: 32px;
    margin: 16px;
    border-radius: 8px;
    outline: none;
    border: none;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 0 8px;
} */
.autocomplete-input {
  width: calc(50% - 88px);
  height: 40px;
  position: absolute;
  right: 32px;
  margin: 16px;
  border-radius: 8px;
  outline: none;
  border: none;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 0 8px;
}
</style>
