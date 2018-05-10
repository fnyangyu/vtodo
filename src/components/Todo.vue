<template>
  <div class="wrap">
    <Header />
    <TodoList />
    <Form />
    <Actions />
  </div>
</template>

<script>
import Header from './Header'
import Form from './Form'

import TodoList from './TodoList'
import Actions from './Actions'
export default {
  name: 'Todo',
  components: {
    Header,
    TodoList,
    Form,
    Actions
  }
}
</script>

<style >
.wrap {
  width: 567px;
  background-color: #fff;
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>