<template>
  <div>
    <table>
      <tr>
        <th>user_id</th>
        <th>title</th>
        <th>Completed</th>
      </tr>
      <tr v-for="sd in setData" :key="sd.id">
        <td>{{ sd.userId }}</td>
        <td>{{ sd.title }}</td>
        <td>{{ sd.completed }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const setData = ref(null)

const fetchData = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')

    console.log(res.data)
    setData.value = res.data
  } catch (error) {
    console.log(error.message)
  }
}

onMounted(() => {
  fetchData()
})
</script>

<style lang="scss" scoped></style>
