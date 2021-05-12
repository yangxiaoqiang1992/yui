<template>
  <img alt="Vue logo" src="./assets/logo.png" class="logo"/>
  <y-button /> 
  <y-input />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld
  }
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.logo{
  width:50%;
  margin:0 auto;
  display:block;
}
</style>
