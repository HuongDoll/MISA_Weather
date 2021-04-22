<template>
  <div class="hello">
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    this.getApi();
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    getApi() {
      const options = {
        method: "GET",
        url: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily",
        params: { lat: "21.0278", lon: "105.8342" },
        headers: {
          "x-rapidapi-key":
            "916fd437b1mshbb1fec457b69aacp11a647jsn12d0b44cc7ba",
          "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
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

</style>
