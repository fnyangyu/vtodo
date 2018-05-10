<template>
  <div class="wrap Footer">
    <input type="text" placeholder="请输入" v-model="userInput">
    <div class="tu" v-on:click="addTodo">
      <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 41.1 (35376) - http://www.bohemiancoding.com/sketch -->
      <title>Capa_1</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Desktop" transform="translate(-652.000000, -660.000000)" fill="#FFFFFF">
          <g id="add-button" transform="translate(632.000000, 640.000000)">
            <g id="add" transform="translate(20.274809, 20.274809)">
              <g id="Capa_1">
                <path d="M40.7342293,18.5308356 L24.5407866,18.5308356 L24.5407866,2.33730534 C24.5407866,1.59962372 23.5390843,8.75690437e-05 21.5357673,8.75690437e-05 C19.5324503,8.75690437e-05 18.530748,1.59971129 18.530748,2.33730534 L18.530748,18.5309232 L2.33721777,18.5309232 C1.59962372,18.5308356 0,19.5325379 0,21.5357673 C0,23.5389968 1.59962372,24.5407866 2.33721777,24.5407866 L18.5308356,24.5407866 L18.5308356,40.7344045 C18.5308356,41.4719109 19.5324503,43.0716222 21.5358549,43.0716222 C23.5392595,43.0716222 24.5408742,41.4719109 24.5408742,40.7344045 L24.5408742,24.5407866 L40.734492,24.5407866 C41.4719985,24.5407866 43.0717098,23.5391719 43.0717098,21.5357673 C43.0717098,19.5323628 41.4718234,18.5308356 40.7342293,18.5308356 Z" id="Shape"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data: () => ({
    userInput: ''
  }),
  methods: {
    addTodo() {
      const todoCount = this.$store.state.todo.all.length
      const todo = {
        id: (todoCount + 1).toString(),
        body: this.userInput,
        compl: false
      }
      this.$store.commit('addTodo', todo)
      this.userInput = ''
    }
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  position: relative;
  height: 160px;
}
input {
  width: 360px;
  height: 40px;
  padding-left: 20px;
  background-color: #d8d8d8;
  border: 0;
  box-shadow: -1px -1px;
  box-sizing: border-box;
  outline: 0;
  font-size: 1.3em;
}
.tu {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: #7ed321;
  position: absolute;
  top: 25%;
  left: 78%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
