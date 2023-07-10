import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import MyInput from '@/components/MyInput.vue'

createApp(App)
    .component('MyInput', MyInput)
    .directive('focus', {
        mounted(el) {
            el.querySelectorAll('input').forEach((inputEl: HTMLElement) => {
                inputEl.focus()
            });
        }
    })
    .directive('weekend', {
        updated(el, binding) {
            console.log(binding);
            
                const weekday = (new Date(binding.value)).getDay()
                if (weekday == 0 || weekday == 6) {
                    el.style.display = 'none'
                }else{
                    el.style.display = 'block'
                }

        }
    })
    .mount('#app')