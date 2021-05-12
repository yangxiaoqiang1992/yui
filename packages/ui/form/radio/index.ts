import type { App } from 'vue'
import Radio from './src'

(Radio as any).install = function (app:App):void{
  // Vue.component('Message', Message)
//   app.config.globalProperties.$message = Input // 兼容vue2,使用this.$message()
     app.component(Radio.name,Radio)
}
export { // 通过use方式引用，或按需引入
  Radio
}
export default Radio
