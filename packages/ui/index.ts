import type { App } from 'vue'
import * as basic from './basic'
import * as notice from './notice'
import * as form from './form'

const components = {
  ...basic,
  ...notice,
  ...form
}
const install = (app:App,options:any) => {
  console.log('options',options)
  Object.values(components).forEach((component:any)=>{
    app.use(component)
  })
}
export default {
  install
}
