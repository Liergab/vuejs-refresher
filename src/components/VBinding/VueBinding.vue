<script setup>
const vid = 'https://youtu.be/pLF_EDvlUmY?si=EkKfveW7gBXr6RAW'
const img =
  'https://images.pexels.com/photos/24771857/pexels-photo-24771857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const h = '200'
const w = '200'
const isTrue = false
</script>
<template>
  <div>
    <HelloWorld />
    <a :href="vid" :class="{ red: isTrue, green: !isTrue }">Video</a>
    <img :src="img" :alt="img" :height="h" :width="w" />
  </div>
</template>
<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
