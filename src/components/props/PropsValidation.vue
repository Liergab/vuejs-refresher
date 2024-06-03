<template>
  <div>
    <h1>FullName:{{ propsValidate.fullname }}</h1>
    <h1>Age: {{ propsValidate.age }}</h1>
  </div>
</template>

<script setup>
const propsValidate = defineProps({
  fullname: {
    type: String
  },
  age: {
    type: Number
  }
})
</script>

<style scoped></style>
