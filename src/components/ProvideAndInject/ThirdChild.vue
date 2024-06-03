<template>
  <div>
    <h1>Count:{{ shared.count }}</h1>
  </div>

  <ul v-for="d in shared.data" :key="d.Id">
    <li>
      {{ d.email }}
    </li>
    <li>
      {{ d.first_name }}
    </li>
    <li>
      {{ d.last_name }}
    </li>
  </ul>
</template>
<script setup>
import { inject } from 'vue'

const shared = inject('shared')
</script>

<style lang="scss" scoped></style>
