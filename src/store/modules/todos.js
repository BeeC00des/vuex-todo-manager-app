// import axios from 'axios'

import axios from "axios";

//create object assigned to the four state of vue store

const state = {
    todos:[]
};

const getters = {
    allTodos: state => state.todos
    // allTodos (state) {
    //     return state.todos.filter(todo => todo.title)
    //   }
};

const actions = {
    async fetchTodos({commit}){
        const response  = 
        await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(response.data)

        commit('setTodos' , response.data);
    },
    async addTodo({commit},title){
        const response  = 
        await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed:false});
        console.log(response.data)

        commit('newTodo', response.data)
    },

    async deleteTodo({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id)
    },

    async filterTodo({commit}, e){
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        console.log(limit);

        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)

        commit('setTodos', response.data)

    }, 
    async updateTodo({commit}, upTodo){
        const response =await axios.put(`https://jsonplaceholder.typicode.com/todos/${upTodo.id}`, upTodo);
        console.log(response.data),
        
        commit('uptodo', response.data)
    },
};

const mutations = {
    setTodos:(state, todos) => (state.todos = todos ),
    newTodo:(state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) =>
    (state.todos =  state.todos.filter(todo => todo.id !== id)),
    uptodo:(state, upTodo) => {
        const  index = state.todos.findIndex(todo => todo.id ==upTodo.id )
        if (index !== -1){
            state.todos.splice(index, 1, upTodo  )
        }
    }
};


export default {
    state,
    getters,
    actions,
    mutations
}
