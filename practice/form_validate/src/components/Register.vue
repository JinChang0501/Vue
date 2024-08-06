<script setup>
import { reactive } from 'vue';
import { ref } from 'vue'

const name = ref('')
const mobile = ref('')
const birthday = ref('')
const danger = reactive([true, true, true])

const showError = () => {
  if (name === '') {
    danger[0] = false
  } else {
    danger[0] = true
  }

  if (mobile === '') {
    danger[1] = false
  } else {
    danger[1] = true
  }

  if (birthday === '') {
    danger[2] = false
  } else {
    danger[2] = true
  }
}



const submitForm = () => {

}

</script>

<template>
  <div class="container">
    <form @submit.prevent="showError">
      <div class="mb-3">
        <label for="name" class="form-label">姓名</label>
        <input type="text" v-model="name" class="form-control" id="name" aria-describedby="nameHelp">
        <div id="nameHelp" class="form-text text-danger" :class="{ 'd-none': danger[0] }">
          請輸入姓名
        </div>
      </div>
      <div class="mb-3">
        <label for="mobile" class="form-label">電話</label>
        <input type="text" v-model="mobile" class="form-control" id="mobile" aria-describedby="mobileHelp">
        <div id="mobileHelp" class="form-text text-danger" :class="{ 'd-none': danger[1] }">請輸入電話</div>
      </div>

      <div class="mb-3">
        <label for="birthday" class="form-label">生日</label>
        <input type="date" v-model="birthday" class="form-control" id="birthday" aria-describedby="birthHelp">
        <div id="birthHelp" class="form-text text-danger" :class="{ 'd-none': danger[2] }">請選擇生日</div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>


<style scoped></style>