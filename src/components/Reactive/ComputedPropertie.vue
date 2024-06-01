<template>
  <div>
    <h1>count:{{ count }}</h1>

    <button @click="add">+</button>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const count = ref(0)

watchEffect(() => console.log(count.value))
const add = () => {
  count.value++
}
</script>

<style lang="scss" scoped></style>
