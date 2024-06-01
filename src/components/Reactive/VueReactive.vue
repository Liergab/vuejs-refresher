<template>
  <div>
    <h1>Count:{{ initialstate.count }}</h1>
    <h1>{{ isTrue ? 'Active' : 'logout' }}</h1>
    <button @click="active">active</button>
    <div v-for="(people, index) in initialstate.people" :key="index">
      <h1>{{ people.name }}</h1>
      <h1>{{ people.age }}</h1>
    </div>
    <button @click="add">+</button>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
const isTrue = ref(true)
const initialstate = reactive({
  count: 0,
  people: [
    { name: 'bryan', age: '23' },
    { name: 'gabriel', age: '23' }
  ]
})

const add = () => {
  initialstate.count++

  console.log(initialstate.count)
}

const active = () => {
  isTrue.value = !isTrue.value
}
</script>

<style lang="scss" scoped></style>
