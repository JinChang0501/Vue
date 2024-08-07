<script setup>
import axios from 'axios'
import { onMounted } from 'vue';
import { ref } from 'vue';

const posts = ref([])

onMounted(async () => {
  const newData = {
    "userId": 1,
    "title": "Test Post",
    "body": "Test Test Test Test Test"
  }


  try {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    axios.post(url, newData)
      .then((res) => {
        console.log('請求成功:', res.data);
        posts.value.push(res.data)
      })
      .catch((error) => {
        console.log('請求失敗', error)
      })
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    posts.value = res.data
  } catch (error) {
    console.log('請求失敗', error);

  }
})

</script>





<template>
  <h1>AxiosDemo</h1>
  <div class="container">

    <ul>
      <li v-for="post in posts">{{ post.title }}</li>
    </ul>
  </div>


</template>


<style scoped></style>