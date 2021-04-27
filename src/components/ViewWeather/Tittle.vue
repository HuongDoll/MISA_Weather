<template>
  <div class="tittle">
    <div class="cityName">Thời tiết Hà Nội</div>
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
  methods: {
 
    search(input) {
      if (input.length < 1) { return [] }
      // return countries.filter(country => {
      //   return country.toLowerCase()
      //     .startsWith(input.toLowerCase())
      // })
    },

    
    getResultValue(result) {
      return result.title
    },

    
    handleSubmit(result) {
      // window.open(`${wikiUrl}/wiki/${
      //   encodeURI(result.title)
      // }`)
      return result.title
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.searchCity{
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

ul{
  background-color: #fff;
}
.tittle{
    width: 100%;
    height: 80px;
    background-color: #1e159b;
    display: flex;
    align-items: center;
}
.tittle .cityName{
    font-size: 24px;
    font-weight: 700;
    padding: 16px 16px 16px 48px;
    color: #fff;
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
.autocomplete-input{
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
