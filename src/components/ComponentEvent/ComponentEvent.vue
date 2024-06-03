<template>
  <div>
    <button @click="$emit('increment')">+</button>
    <button @click="$emit('alertData', message)">alert</button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
