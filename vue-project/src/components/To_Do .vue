<template>
  <div class="todo-container">
    <h1>To-Do List</h1>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
    <button @click="addTask">Add</button>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" v-model="task.completed" />
        <span :class="{ completed: task.completed }">{{ task.text }}</span>
        <button @click="removeTask(task.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Task {
  id: number
  text: string
  completed: boolean
}

const newTask = ref('')
const tasks = ref<Task[]>([])
let taskId: number = 0

function addTask() {
  if (newTask.value.trim() === '') return
  tasks.value.push({
    id: taskId++,
    text: newTask.value.trim(),
    completed: false
  })
  newTask.value = ''
}

function removeTask(id: number) {
  tasks.value = tasks.value.filter(task => task.id !== id)
}
</script>

<style scoped>
.todo-container {
  max-width: 400px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
}
.completed {
  text-decoration: line-through;
  color: gray;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
</style>
