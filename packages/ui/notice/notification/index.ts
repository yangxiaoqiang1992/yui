import type { App } from 'vue'
import Notification from './src/notification'

(Notification as any).install = function (app:App):void{
  // Vue.component('Message', Message)
  app.config.globalProperties.$notiflication = Notification // 兼容vue2,使用this.$notiflication()
}
export { // 通过use方式引用，或按需引入
  Notification
}
export default Notification
