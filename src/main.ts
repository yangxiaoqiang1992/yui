import { createApp } from 'vue'
import App from './App.vue'
import Yui from '../packages/ui/index'
import '@style/theme.less'
console.log(Yui)

createApp(App).use(Yui,{prefix:'y'}).mount('#app')
