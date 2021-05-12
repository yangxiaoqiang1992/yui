import type { App } from 'vue'
import Button from './src'

(Button as any).install = function (app:App):void{
  // Vue.component('Message', Message)
//   app.config.globalProperties.$message = Input // 兼容vue2,使用this.$message()
    app.component(Button.name,Button)
}
export { // 通过use方式引用，或按需引入
    Button
}
export default Button
