import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import MyInput from '@/components/MyInput.vue'

createApp(App)
    .component('MyInput', MyInput)
    .mount('#app')
