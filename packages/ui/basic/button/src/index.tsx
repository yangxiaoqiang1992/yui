import { defineComponent } from 'vue'

export default defineComponent({
  name:'YButton',  
  setup(){
    return ()=>{
       return <div class="button"><input></input></div> 
    }  
  }
})