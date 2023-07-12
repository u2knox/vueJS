import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
  .directive('random', {
    mounted(el, bind) {
      let img = 0
      setInterval(() => {
        const select = document.querySelector('#random').value
        if (select == 'random') {
          let random = Math.floor(Math.random()*4)
          el.style.backgroundImage = `url('${bind.value.img[random]}')`
        } else {
          el.style.backgroundImage = `url('${bind.value.img[img]}')`
          img++
          if (img == bind.value.img.length) {
            img = 0
            console.log(img)
          }
        }
      }, bind.value.timeout)
    }
  })
  .mount('#app')
