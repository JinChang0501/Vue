<script setup>

</script>

<template>
  <h1>Pinia</h1>
  <ul>
    <li><router-link to="/changedivcolor">ChangeDivColor</router-link></li>
    <li><router-link to="/piniastore">PiniaStore</router-link></li>
    <li><router-link to="/register">Register</router-link></li>
    <li><router-link to="/axios">AxiosDemo</router-link></li>

  </ul>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container {
  width: 600px;
  height: 500px;
}
</style>
