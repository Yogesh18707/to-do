<template>
  <div>
    <div class="mainTodo">
  <h1>Todo app</h1>

      <div class="inputTodo">
  <input v-model="newTodo" placeholder="Add tasks" @keyup.enter="addTodo()" />
  <button @click="addTodo()" >Add</button>
      </div>
      <div class="Listcontainer" >
  <ul>
    <li v-for="(todo, index) in todos" :key="todo.id">
    <span :class="{completed: todo.completed}">{{todo.text}}</span>
    <span :class="{completed: todo.completed}">{{todo.id}}</span>
    <button @click="removeTodo(index)" id="del"> &#10008;</button>
    </li>
  </ul>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

interface ITodo{
  id:number,
  text:string,
  completed:boolean
}
const newTodo=ref<string>('')

const todos=ref<ITodo[]>([])

let newId= 0

function addTodo(){
  if (!newTodo.value){
    return;
  }
  todos.value.push({
    text:newTodo.value,
    completed:false,
    id:newId++
  });
}
newTodo.value='';

function removeTodo(index: number){
  todos.value.splice(index,1)

}



</script>

<style>
.completed{
  text-decoration: line-through;
  color: grey;
}
li{
  list-style: none;
}
*{
  background:linear-gradient(#242124,#5A4FCF);
  background-size:cover;
  margin:0 ;
  padding:0;
}
.mainTodo{
  height: 100vh;
  width: 50vh;
  justify-items: center;
  color: white;
  background: transparent;
  margin: 10vh 50vh;
}
.inputTodo{
  height: 28px;
  border-radius: 10px;
  padding: 5px 5px ;
  justify-content: space-between;
}
input{
  border: none;
  outline: none;
  background: transparent;
  font-size: 1.5vw;
  padding: 5px 5px ;

}
button{
  border: none;
  outline: none;
  background: coral;
  font-size: 1.5vw;
  cursor: pointer;
  padding: 2px 2px;
  border-radius: 10px;
}
</style>