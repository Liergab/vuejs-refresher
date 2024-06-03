<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="formData.username" placeholder="username" />
      <input type="text" v-model="formData.age" placeholder="age" />
      <input type="text" v-model="formData.password" placeholder="password" />
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['userInfo'])
const formData = ref({
  username: '',
  age: '',
  password: ''
})

const handleSubmit = () => {
  emit('userInfo', formData.value)
  formData.value = {
    username: '',
    age: '',
    password: ''
  }
}
</script>

<style lang="scss" scoped></style>
