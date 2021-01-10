<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
*,*:before,*:after {
  margin: 0; padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
}

main {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 3rem 0;
} 

</style>
