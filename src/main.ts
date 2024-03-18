import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from "./plugins/font-awesome"
import "./style.css";

createApp(App)
	.component('fa', FontAwesomeIcon)
	.mount('#app')
