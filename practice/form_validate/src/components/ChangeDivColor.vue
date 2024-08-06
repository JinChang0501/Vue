<script setup>
import { ref } from 'vue'

const boxColor = ref('black')
const changeColor = (color) => {
  console.log(color)
  boxColor.value = color
}


const showAlert = () => {
  alert('按下Enter鍵')
}
</script>



<template>
  <div id="box" :style="{ backgroundColor: boxColor }"></div>
  <div div class=" container">
    <div class="buttons">
      <button @click.stop="changeColor('red')">red</button>
      <button @click.prevent="changeColor('orange')">orange</button>
      <button @click.capture="changeColor('yellow')">yellow</button>
      <button @click.self="changeColor('green')">green</button>
      <button @click.once="changeColor('blue')">blue once只能按一次</button>
      <button @click.middle="changeColor('purple')">purple</button>
      <button @click.passive="changeColor('gray')">gray</button>
      <button @wheel.passive="changeColor('pink')">pink</button>

      <input type="text" @keydown.enter="showAlert()">
    </div>
  </div>

</template>


<style scoped>
#box {
  margin-bottom: 20px;
  width: 200px;
  height: 200px;
}

.buttons>button {
  background-color: rgb(120, 120, 213);
  margin-left: 20px;
}

.buttons>input {
  margin-left: 20px;
}
</style>