<template>
  <div class="wrap">
   <ul>
      <li :key="todo.id" v-for="todo in filteredTodos" :class="{done: todo.compl}" @click="close(todo.id)">
        {{ todo.body }}
      </li>
    </ul>
  </div>
</template>

<script>
import { filterTodos } from '../utils'
export default {
  name: 'TodoList',
  methods: {
    close(id) {
      this.$store.commit('close', id)
    }
  },
  computed: {
    todos() {
      return this.$store.state.todo.all
    },
    currentFilter() {
      return this.$store.state.todo.currentFilter
    },
    filteredTodos() {
      return filterTodos(this.todos, this.currentFilter)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';
.wrap {
  .primary {
    background-color: $accent-blue;
  }
}
ul {
  width: 327px;
  margin: 0 auto;
}
li {
  font-size: 24px;
  line-height: 60px;
}
li.done {
  color: lighten(#000, 50%);
  text-decoration: line-through;
}
</style>
