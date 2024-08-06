<script setup>

import { onUpdated } from 'vue';
import { ref } from 'vue'
const note = ref('My Note')
const text = ref('請輸入樣式名稱')
const fruits = ref(['蘋果', '芭樂', '香蕉', '柳橙',])
const textTrue = ref('')
const textStyle = ref({ color: 'red', fontWeight: 'bold', fontSize: '20px' })
const gender = ref('男')
// const class30 = ref('font30')

const isFont30 = ref(false)


const showFruit = (item, index) => {

  console.log(`index值: ${index + 1}`)
  alert(`你選擇的水果是${item}`)

}

onUpdated(() => {
  if (note.value === 'font30') {
    textTrue.value = true
  } else {
    textTrue.value = false

  }


  setLocalStorage()
  console.log('資料已更新')
})

const setLocalStorage = () => {
  localStorage.setItem('userNote', note.value)
}

const submitForm = () => {
  console.log()
}

const handleChange = (item) => {
  alert(item)
}

const setGender = () => {
  console.log(gender.value)
}
</script>



<template>
  <h1>我的筆記</h1>
  <input v-model="note" type="text" :placeholder="text">
  <p :style="textStyle">您的筆記：{{ note.length }}</p>
  <p :class="note">{{ 10 + 3 }}</p>
  <img v-show="note.length >= 10" src="../assets/dog.jpg" alt="">
  <p>{{ '套用的樣式是font30?' }}{{ textTrue }}</p>
  <p v-if="isFont30">{{ '我是font30' }}</p>
  <p v-else>我是font20</p>
  <ul id="fruit-list">
    <li v-for="(item, index) in fruits" @click="showFruit(item, index)">{{ index + 1 }} . {{ item }}</li>
  </ul>


  <form action="" id="myForm" @submit="submitForm">


    <select name="fruit" id="Fruit" @change="handleChange(item)">
      <option value="" v-for="item in fruits" :value="item">{{ item }}</option>
    </select>
    <input type="radio" name="gender" id="" v-model="gender" @click="setGender" value="男"> 男
    <input type="radio" name="gender" id="" v-model="gender" value="女"> 女

  </form>

</template>



<style scoped>
.font30 {
  font-size: 30px;
  color: rgb(12, 235, 38);
}

.font20 {
  font-size: 20px;
}

#fruit-list {
  list-style: none;
}

#fruit-list>li:hover {
  color: red;
  font-size: 30px;
  cursor: pointer;
}
</style>