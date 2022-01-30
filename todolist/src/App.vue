<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoHeader from "@/components/TodoHeader";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import TodoFooter from "@/components/TodoFooter";

export default {
  name: 'App',
  components: {
    TodoFooter,
    TodoList,
    TodoInput,
    TodoHeader,
  }
}
</script>

<style>
html,body{
  font-family: 'Nanum Pen Script', cursive;
  font-size: 1.25rem;
}
body{
  text-align: center;
  background-color: #f6f6f6;
}
input{
  border-style: groove;

}

button{
  border-style: groove;
}

.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}

#app {
  font-family: 'Nanum Pen Script', cursive;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
