import { defineComponent } from 'vue'

export default defineComponent({
  name:'YInput',  
  setup(){
    return ()=>{
       return <div class="input">input组件<input></input></div> 
    }  
  }
})