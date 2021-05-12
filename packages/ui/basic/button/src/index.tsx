import { defineComponent } from 'vue'

export default defineComponent({
  name:'YButton',  
  setup(){
    return ()=>{
       return <div class="button">YButton<input></input></div> 
    }  
  }
})