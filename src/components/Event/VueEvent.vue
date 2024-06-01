<template>
  <div>
    <h1>Count {{ count }}</h1>
    <button @click="add" class="primary">add</button>
    <form @submit="submit">
      <input type="text" placeholder="name" />

      <input type="text" placeholder="password" />
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let count = ref(0)

const add = () => {
  count.value++
}
const submit = (e) => {
  e.preventDefault()

  alert('sample')
}
</script>

<style scoped>
.primary {
  background: lightblue;
  color: rgb(49, 46, 45);
  padding: 5px 30px;
}
</style>
