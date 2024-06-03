<template>
  <div class="todo_container">
    <div class="form-container">
      <form @submit.prevent="handleSubmit" class="form-input-container">
        <input type="text" v-model="formadata.first_name" placeholder="FirstName" />
        <input type="text" v-model="formadata.last_name" placeholder="LastName" />
        <input type="email" v-model="formadata.email" placeholder="Email" />
        <input type="text" v-model="formadata.gender" placeholder="Gender" />
        <input type="text" v-model="formadata.ip_address" placeholder="Ip address" />
        <button type="submit">{{ isEditing ? 'update' : 'Submit' }}</button>
      </form>
    </div>
    <div class="list-container">
      <ul v-for="td in todolist" :key="td.id">
        <li>Fullname:{{ td.first_name }} {{ td.last_name }}</li>
        <li>Email: {{ td.email }} Gender:{{ td.gender }}</li>
        <li>Ip Address: {{ td.ip_address }}</li>
        <li><button @click="deleteItem(td.id)">Delete</button></li>
        <li><button @click="editItem(td)">update</button></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import data from '../../data/data.json'
import { ref } from 'vue'

const todolist = ref(data)
const formadata = ref({
  id: '',
  first_name: '',
  last_name: '',
  email: '',
  gender: '',
  ip_address: ''
})
const isEditing = ref(false)

const handleSubmit = () => {
  if (isEditing.value) {
    updateItem()
  } else {
    create()
  }
}
const create = () => {
  todolist.value.push({ ...formadata.value, id: data.length + 1 })
  resetForm()
}

const updateItem = () => {
  const index = todolist.value.findIndex((td) => td.id === formadata.value.id)
  if (index !== -1) {
    todolist.value[index] = { ...formadata.value }
  }
  resetForm()
  isEditing.value = false
}

const deleteItem = (id) => {
  todolist.value = todolist.value.filter((td) => td.id !== id)
}

const editItem = (item) => {
  formadata.value = { ...item }
  isEditing.value = true
}

const resetForm = () => {
  formadata.value = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    ip_address: ''
  }
}
</script>

<style scoped>
.todo_container {
  width: 100%;
  height: 100%;
  display: flex;
}

.form-input-container {
  background: #36728a;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
  border-radius: 4px;
}

.form-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-container {
  flex: 1;
  width: 100%;
}

.list-container ul {
  background: rgb(52, 52, 122);
  max-width: 300px;
}

.list-container ul li {
  list-style: none;
}
</style>
