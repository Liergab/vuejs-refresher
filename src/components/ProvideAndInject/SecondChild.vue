<template>
  <div>
    <ThirdChild />
    <button @click="shared.increment">Increment</button>
  </div>
</template>

<script setup>
import ThirdChild from './ThirdChild.vue'
import { inject } from 'vue'

const shared = inject('shared')
</script>

<style lang="scss" scoped></style>
