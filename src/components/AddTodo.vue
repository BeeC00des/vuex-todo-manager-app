<template>
    <div>
        <h2>Add todo</h2>
        <form @submit = "onSubmit">
            <input type="text" v-model="title" placeholder="add todo">
            <input type="submit" value="submit">
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default{
   name:"AddTodo" ,
   data(){
    return {
        title:''
    }
   },
   methods:{
    ...mapActions(['addTodo']),
    onSubmit(e){
        e.preventDefault();
        this.addTodo(this.title); 
    }
   }
}
</script>
<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #b84179;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  color:#fff;
  background: #b84179;
  border: 1px #b84179 solid;
  cursor: pointer;
}
</style>
