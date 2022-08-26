<template>
  <div id="app">
    <div class="container">
          <AddTodo />
           <filterTodo/>
          <Todo />
         
      
    </div>
  </div>
</template>

<script>
import Todo from './components/TodoApp.vue';
import AddTodo from './components/AddTodo.vue';
import filterTodo from './components/filterTodo.vue';

export default {
  name: 'App',
  components: {
    Todo,
    AddTodo,
    filterTodo
  }
}
</script>

<style>
body{
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, Helvetica, sans-serif;
  line-height: 1.6;
  background:#e8f7f0;
}

.container{
  max-width: 1100px;
  margin:auto;
  overflow:auto;
  padding:0 2rem;
}


</style>
