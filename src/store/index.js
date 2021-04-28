import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        city: "Hanoi",
        weatherToday: "",
        listWeather: "",
        img: 2
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
        },
        getImg(state) {
            return state.img;
        }

    },
    mutations: {
        setWeather(state, payload) {
            state.weatherToday = payload.data[0];
            state.listWeather = payload.data.slice(1, 8);
            if (payload.data[0].weather.code > 802) {
                state.img = 9;
            } else {
                state.img = ((payload.data[0].weather.code - payload.data[0].weather.code % 100) / 100);
            }
        },
        setCity(state, city) {
            state.city = city;
        }
    },
    actions: {
        getWeather(context, location) {
            const options = {
                method: "GET",
                url: " https://api.weatherbit.io/v2.0/forecast/daily",
                params: { lat: location.lat, lon: location.lon, days: 16, key: "7d2ecceb4a7b43799bfa309c965de5eb" },

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
        getCity(context, city) {
            context.commit("setCity", city);
        }
    }
})

export default store