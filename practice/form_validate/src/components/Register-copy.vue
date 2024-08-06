<script setup>
import { ref, reactive } from 'vue'

const user = reactive({
  name: '',
  mobile: '',
  birthday: '',
})
const error = reactive({
  name: '',
  mobile: '',
  birthday: '',
})

const errorMsg = reactive({
  name: '請輸入姓名',
  mobile: '請輸入電話',
  birth: '請輸入生日',
})

const submitForm = () => {

  if (user.name === 0) {
    error.name = errorMsg.name
  }

  if (user.mobile === 0) {
    error.mobile = errorMsg.name
  }

  if (user.birthday === 0) {
    error.birthday = errorMsg.name
  }

}

</script>

<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">姓名</label>
        <input type="text" v-model="user.name" class="form-control" id="name" aria-describedby="nameHelp">
        <div v-show="user.name.length === 0" id="nameHelp" class="form-text text-danger">請輸入姓名</div>
      </div>
      <div class="mb-3">
        <label for="mobile" class="form-label">電話</label>
        <input type="text" v-model="user.mobile" class="form-control" id="mobile" aria-describedby="mobileHelp">
        <div v-show="user.mobile.length === 0" id="mobileHelp" class="form-text text-danger">請輸入電話</div>
      </div>

      <div class="mb-3">
        <label for="birthday" class="form-label">生日</label>
        <input type="date" v-model="user.birthday" class="form-control" id="birthday" aria-describedby="birthHelp">
        <div v-show="user.birthday.length === 0" id="birthHelp" class="form-text text-danger">請選擇生日</div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>


<style scoped></style>