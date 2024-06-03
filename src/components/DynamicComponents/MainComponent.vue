<template>
  <div>
    <ComponentOne v-if="component === 1" />
    <ComponentTwo v-if="component === 2" />
    <ComponentThree v-if="component === 3" />

    <button @click="component = 1">1</button>
    <button @click="component = 2">2</button>
    <button @click="component = 3">3</button>
  </div>
</template>

<script setup>
import ComponentOne from './ComponentOne.vue'
import ComponentTwo from './ComponentTwo.vue'
import ComponentThree from './ComponentThree.vue'
import { ref } from 'vue'

const component = ref(1)
</script>

<style lang="scss" scoped></style>
