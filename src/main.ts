import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from "./plugins/font-awesome"
import "./style.css";
import hljsVuePlugin from "./plugins/highlight"

createApp(App)
	.component('fa', FontAwesomeIcon)
	.use(hljsVuePlugin)
	.mount('#app')
