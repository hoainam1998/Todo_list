<template>
  <main>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.id">
        <Row v-bind:todo="todo" v-on:delete-todo="deleteTodo" v-on:update-todo="updateTodo" />
      </li>
    </ul>
  </main>
</template>
<script>
import axios from "axios";
import Row from "../components/Row";
export default {
  name: "Home",
  components: {
    Row,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    updateTodo(updateTodo){
      this.todos=this.todos.map(todo=>todo.id===updateTodo.id?{id:todo.id,title:todo.title,completed: updateTodo.completed}:todo);
    },
    deleteTodo(id){
      axios.delete('https://jsonplaceholder.typicode.com/todos/'+id)
      .then(res=>res?this.todos=this.todos.filter(todo=>todo.id!==id):this.todos)
      .catch(err=>console.log(err))
    }
  },
  created() {
    let newTodo=JSON.parse(localStorage.getItem('todo'))||[];
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=20")
      .then((res) => (this.todos = [...res.data,newTodo]))
      .catch((err) => console.log(err));
  }
};
</script>
<style scoped>
ul {
  list-style: none;
}

li {
    margin-bottom: 6px;
}
</style>