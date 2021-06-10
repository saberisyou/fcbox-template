import { createApp } from 'vue'
import { registerMicroApps, start } from 'qiankun'
import App from './App.vue'
import router from './router'
import store from './store'

registerMicroApps([
  {
    name: 'react-app',
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/react-child',
  },
  {
    name: 'vue-prev-app',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/vue-prev-child',
  },
  {
    name: 'vue-next-app',
    entry: '//localhost:4200',
    container: '#container',
    activeRule: '/vue-next-child',
  },
])

start()

createApp(App).use(store).use(router).mount('#app')
