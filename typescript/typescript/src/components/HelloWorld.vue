<script setup lang="ts">
import {ref} from 'vue'
interface Task{
  text: string
  id:number
  completed:boolean
}

const newTask=ref('')
const task:ref<Task[]> = ref([])
let nextId:1

function addTask(){
  if (newTask.value.trim()){
    task.value.push({id:nextId++, text: newTask.value.trim(), completed:false})
    newTask.value = ''
  }
}

function removeTask(){
  task.value=task.value.filter(task =>task.id !== id)
}
</script>

<template>
  <div>
    <input v-model="newTask" @keyup.enter="addTask" type="text" placeholder="Add a task" />
    <button @click="addTask">Add task</button>

    <ul>
      <li v-for="task in task" :key="task.id"></li>
      <input type="checkbox" v-model="task.completed">
      <span :class="{done: task.completed}">{{task.text}}</span>
      <button @click="removeTask(task.id)">&#10008;</button>
    </ul>
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: gray;
}
</style>
