<script setup>
import HelloWorld from './components/HelloWorld.vue'
import RegisterCopy from './components/Register-copy.vue';
import Register from './components/Register.vue';
import ChangeDivColor from './components/ChangeDivColor.vue';
import DataSend from './components/DataSend.vue';
import { ref } from 'vue';

const msgFromParent = ref('我是Parent')
const salary = ref(1000000000)
const msgToChild = ref('')

let receiveMsg = ref('預設訊息')
function updateMsg(newMsg) {
  receiveMsg.value = newMsg
}



</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <h2>子組件傳來的:</h2>
  <p>{{ receiveMsg }}</p>
  <input type="text" v-model="msgToChild" placeholder="傳給小孩的訊息">
  <DataSend :msgFromParent="msgFromParent" :salary="salary" :msgToChild="msgToChild" @update:msg="updateMsg"></DataSend>
  <!-- <ChangeDivColor /> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <Register /> -->
  <!-- <RegisterCopy /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
