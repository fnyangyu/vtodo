<template>
  <div id="app">
    <Todo />
  </div>
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: 'app',
  components: {
    Todo
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
#app {
  width: 100%;
  background-color: #6f9436;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
