<template>
    <div>
        <h3>Todo Vuex </h3>
           <div class="legend">
                <span>Double click to mark as complete</span>
                <span>
                    <span class="incomplete-box"></span> = Incomplete
                </span>
                <span>
                    <span class="complete-box"></span> = Complete
                </span>
            </div>
        <div class="todoBox">
            <div 
            @click = "onDbClick(todo)" 
            v-for="todo in allTodos" 
            :key ="todo.id" 
            class="todoItems"
            v-bind:class="{'is-complete':todo.completed}">
                <p class="main-text">{{todo.title}}</p>
                <i  @click ="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>
</template>

 
<script>
import { mapActions, mapGetters }  from 'vuex'

export default {
    name:"TodoApp",
    methods:{
        ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
       onDbClick(todo){
        const upTodo ={
            id:todo.id,
            title:todo.title,
            completed: !todo.completed
        }
        this.updateTodo(upTodo);
       } 
    },
    computed: {
	...mapGetters(["allTodos"]),
    },
    created(){
        this.fetchTodos();
    }
    
}
</script>


<style scoped>

.main-text{
    font-weight: 400px;
    font-size:16px;
}
.small-text{
    font-weight: 400px;
    font-size:14px;
}


.todoBox {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  
}
.todoItems{
  border: 1px solid #ccc;
  color:#fff;
  background: #b84179;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: black;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}

</style>