<template>
    <div v-bind:class="{complete:todo.completed}">
        <input v-if="todo.completed" checked type="checkbox" @click="$emit('update-todo',{id:todo.id,completed:!todo.completed})"/>
        <input v-else type="checkbox" @click="$emit('update-todo',{id:todo.id,completed:!todo.completed})"/>
        <span>{{todo.title}}</span>
        <button class="delete" @click="$emit('delete-todo',todo.id)"><i class="fas fa-times"></i></button>
    </div>
</template>

<script>
export default {
    name: "row",
    props: ['todo']
}
</script>
<style scoped>
.delete {
    float: right;
    margin-left: 10px;
    height: 100%;
    width: 20px;
    color: white;
    border: none;
    background: #d63031;
    outline: none;
    cursor: pointer;
}

input[type="checkbox"]{
    margin-right: 15px;
}

div {
    padding: 7px;
    background: #bdc3c7;
}

.complete {
    background: #0984e3;
}
</style>