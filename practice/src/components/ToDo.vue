<template>
  <div>
    <h1>To-Do</h1>
    <input v-model="newTodo" placeholder="Add task" @keyup.enter="addTodo()"/>
    <button @click="addTodo()">+</button>

    <ul>
      <li v-for="(todo,index) in todos" :key="todo.id">
              <span :class="{completed: todo.completed}">{{todo.id}}</span>
              <span :class="{completed: todo.completed}">{{todo.text}}</span>
              <button @click="deleteTodo(index)">del</button>
      </li>
    </ul>
  </div>
</template>


<script lang="ts" setup>
import {ref} from 'vue'

interface ITodo {
  text: string
  id: number
  completed: boolean
}

const newTodo = ref<string>()

const todos = ref<ITodo[]>([])
let newId = 0




function addTodo() {
  if (!newTodo.value) {
    return;
  }

  todos.value.push({
    completed: false,
    text: newTodo.value,
    id:newId++
  });
  newTodo.value = '';
}
function deleteTodo(index: number) {
  todos.value.splice(index,1)
}


</script>

<style>
.completed {
  text-decoration: line-through;
  color: gray;
}

li {
  color: gray;
  list-style-type: none;
}
</style>