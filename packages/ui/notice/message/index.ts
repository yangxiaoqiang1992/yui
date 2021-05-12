import type { App } from 'vue'
import Message from './src/message'

(Message as any).install = function (app:App):void{
  // Vue.component('Message', Message)
  app.config.globalProperties.$message = Message // 兼容vue2,使用this.$message()
}
export { // 通过use方式引用，或按需引入
  Message
}
export default Message
