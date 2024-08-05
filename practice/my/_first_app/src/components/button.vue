<script setup>
import {ref, onBeforeMount, onMounted} from 'vue'
const text = ref('Click Me')

const handleClick = () =>{
alert('U R Clikced!!')
}


onBeforeMount(()=>{
 alert('啟動onMounted');
  
})

onMounted(()=>{
  console.log('已經載入元件');
  
})


</script>


<template>
<button id="show" @click="handleClick">{{ text }}</button>
</template>


<style scoped>
#show{
  background-color: tomato;
  border-color: red;
  border-width: 5px;
}

</style>