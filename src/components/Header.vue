<template>
  <header>
    <h1>Todo list</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/form">Form</router-link>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style scoped>
header {
  padding: 7px 0;
  text-align: center;
  color: white;
  background: black;
}

header h1 {
  text-transform: capitalize;
}

a {
  margin-right: 10px;
  color: white;
  text-decoration: none;
}
</style>