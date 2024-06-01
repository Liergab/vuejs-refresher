<template>
  <div>
    <form @submit="data">
      <input type="text" v-model="formdata.username" placeholder="username" />
      <input type="text" v-model="formdata.age" placeholder="age" />
      <button type="submit">submit</button>
    </form>

    <h1 v-for="(sm, index) in submittedMessage" :key="index">{{ sm.username }} - {{ sm.age }}</h1>
    <h1>{{ submittedMessage.length }}</h1>
    <button @click="clear">clear</button>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
const formdata = ref({ username: '', age: '' })
const submittedMessage = ref([])

const data = (e) => {
  e.preventDefault()
  submittedMessage.value.push({ ...formdata.value })
  formdata.value = { username: '', age: '' }
}

const clear = () => {
  submittedMessage.value = []
}

watchEffect(() => console.log(submittedMessage.value))
</script>

<style lang="scss" scoped></style>
