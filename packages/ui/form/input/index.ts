import type { App } from 'vue'
import Input from './src'

(Input as any).install = function (app:App):void{
  // Vue.component('Message', Message)
//   app.config.globalProperties.$message = Input // 兼容vue2,使用this.$message()
     app.component(Input.name,Input)
}
export { // 通过use方式引用，或按需引入
  Input
}
export default Input
