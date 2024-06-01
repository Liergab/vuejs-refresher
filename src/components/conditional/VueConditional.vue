<template>
  <div>
    <div v-if="isTrue">
      <HomePage />
    </div>
    <h1 v-else-if="!isTrue">
      <LoginPage />
    </h1>

    <h1 v-show="isTrue">hi</h1>

    <button @click="clickButton">{{ isTrue ? 'logout' : 'login' }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HomePage from './HomePage.vue'
import LoginPage from './LoginPage.vue'
const isTrue = ref(false)

const clickButton = () => {
  isTrue.value = !isTrue.value
}
</script>

<style lang="scss" scoped></style>
