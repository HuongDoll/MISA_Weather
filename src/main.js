import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'

Vue.use(Autocomplete)

Vue.config.productionTip = false
    // axios
Vue.use(VueAxios, axios)

//const code weather
Vue.prototype.$code = {
    200: "Có giông kèm mưa nhẹ",
    201: "Có giông kèm mưa",
    202: "Có giông kèm mưa lớn",
    230: "Bão có mưa phùn nhẹ",
    231: "Bão có mưa phùn",
    232: "Bão có mưa phùn lớn",
    233: "Sấm sét kèm theo mưa đá",
    300: "Mưa phùn nhẹ",
    301: "Mưa phùn",
    302: "Mưa phùn nặng hạt",
    500: "Mưa nhỏ",
    501: "Mưa vừa phải",
    502: "Mưa nặng hạt",
    511: "Mưa đóng băng",
    520: "Mưa rào nhẹ",
    521: "Mưa to",
    522: "Mưa rào",
    600: "Tuyết nhẹ",
    601: "Tuyết",
    602: "Tuyết rơi nhiều",
    610: "Kết hợp tuyết / mưa",
    611: "Mưa đá",
    612: "Mưa đá dày đặc",
    621: "Mưa tuyết",
    622: "Mưa tuyết dày đặc",
    623: "Gió lớn",
    700: "Sương mù",
    711: "Khói",
    721: "Sương mù buổi sáng",
    731: "Cát / bụi",
    741: "Sương mù",
    751: "Sương mù đóng băng",
    800: "Bầu trời quang đãng",
    801: "Vài đám mây",
    802: "Mây rải rác",
    803: "Ít mây",
    804: "Mây u ám",
    900: "Lượng mưa không xác định",
}
Vue.use(VuetifyGoogleAutocomplete, {
    apiKey: 'AIzaSyB8VeoLGLx1IOc9i6aMsAONyLM1cgYQfxc', // Can also be an object. E.g, for Google Maps Premium API, pass `{ client: <YOUR-CLIENT-ID> }`
    version: '2.0.0', // Optional
});

new Vue({
    render: h => h(App),
    store: store,
    moment,
    VueMoment,
}).$mount('#app')