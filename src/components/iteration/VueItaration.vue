<template>
  <div>
    <h1 v-for="(name, index) in student" :key="index">* {{ name }}</h1>
  </div>
</template>

<script setup>
const student = ['Bryan', 'Gabriel', 'Rubio']
</script>

<style lang="scss" scoped></style>
