import Vue from 'vue'
import vueCustomElement from 'vue-custom-element'
import { hello } from './hello'

Vue.use(vueCustomElement);
Vue.customElement('v-hello', hello);

var wrapper = new Vue({
    el: "#app",
});
