import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        city: "",
        weatherToday: "",
        listWeather: ""
    },
    getters: {
        getCity(state) {
            return state.city;
        },
        getWeatherToday(state) {
            return state.weatherToday;
        },
        getListWeather(state) {
            return state.listWeather;
        }

    },
    mutations: {
        setWeather(state, payload) {
            state.city = payload.city_name;
            state.weatherToday = payload.data[0];
            state.listWeather = payload.data.slice(1, 8);

        },

    },
    actions: {
        getWeather(context) {
            const options = {
                method: "GET",
                url: " https://api.weatherbit.io/v2.0/forecast/daily",
                params: { lat: "21.0278", lon: "105.8342", days: 16, key: "7d2ecceb4a7b43799bfa309c965de5eb" },

            };

            axios
                .request(options)
                .then(function(response) {
                    console.log(response.data);
                    context.commit("setWeather", response.data)
                })
                .catch(function(error) {
                    console.error(error);
                });


        },

    }
})

export default store