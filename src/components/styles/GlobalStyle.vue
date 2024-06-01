<script setup lang="ts">
import LocalStyle from './LocalStyle.vue'
</script>

<template>
  <div>
    <h1 class="textred">Global style</h1>
    <LocalStyle />
  </div>
</template>

<style scoped>
.textred {
  color: red;
}
</style>
