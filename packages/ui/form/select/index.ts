import type { App } from 'vue'
import Select from './src'

(Select as any).install = function (app:App):void{
//   app.config.globalProperties.$message = Input // 兼容vue2,使用this.$message()
     app.component(Select.name,Select)
}
export { // 通过use方式引用，或按需引入
  Select
}
export default Select
