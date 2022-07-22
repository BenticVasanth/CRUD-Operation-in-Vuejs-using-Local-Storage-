import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AppPageLayout from '@/layouts/AppPageLayout'
import '@/assets/css/style.css'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

Vue.component('AppPageLayout', AppPageLayout)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')