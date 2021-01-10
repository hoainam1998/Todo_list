<template>
  <main>
    <form>
      <input type="text" v-model="title"/>
      <input type="submit" @click="addTodo"/>
    </form>
  </main>
</template>
<script>
import {v4} from 'uuid'
export default {
  name: "Form",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTodo(evt){
      evt.preventDefault();
      console.log('addtodo');
      const newTodo={
        id: v4(),
        title: this.title,
        completed: false
      }

      localStorage.setItem('todo',JSON.stringify(newTodo))

      location.href="/";
    }
    
  }
};
</script>
<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
   
  input[type="text"]{
    margin-bottom: .5rem;
    height: 30px;
    border: 1.5px solid #0984e3;
    border-radius: 4px;
    outline: none;
    padding-left: 6px;
  }

  input[type="submit"]{
    border-radius: 4px;
    background: #0984e3;
    color: white;
    font-weight: bold;
    outline: none;
    border: none;
    padding: 7px 0;
    cursor: pointer;
  }
</style>