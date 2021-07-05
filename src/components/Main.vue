<template>
  <div class="main">
    <input id="toggle-all" type="checkbox" class="toggle-all" @change="handleChange">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li v-for="(item, index) in list" :key="index" class="todo">
        <div class="view">
          <input type="checkbox" class="toggle"> <label>{{ item }}</label> 
          <button class="destroy" @click="handleClick(item)">x</button>
        </div>
        <input type="text" class="edit">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      list: JSON.parse(localStorage.getItem('list')),
      currentText: ''
    }
  },
  watch: {
    '$store.state.inputText': function () {
      this.list = JSON.parse(localStorage.getItem('list'))
    },
    deep: true,
    immediate: true,
  },
  methods: {
    handleChange () {
      console.log(21312)
    },
    handleClick(value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>
  .main {
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
  }

  .main .toggle-all {
    text-align: center;
    border: none;
    opacity: 0;
    position: absolute;
  }

  .main .toggle-all + label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: -52px;
    left: -13px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .main .toggle-all + label:before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }


  .main input[type="checkbox" i] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    margin: 3px 3px 3px 4px;
    padding: initial;
    border: initial;
  }

  .main .todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .main .todo-list li:last-child {
    border-bottom: none;
  }

  .main .todo-list li {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
  }

  .main .todo-list li .edit {
    display: none;
  }

  .main .new-todo, .edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 20%);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

.main .todo-list li .toggle {
  cursor: pointer;
  opacity: 0;
  left: 4px;
  text-align: center;
  width: 40px;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  -webkit-appearance: none;
  appearance: none;
}

.main .todo-list li .toggle + label {
  background-image: url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E);
  background-repeat: no-repeat;
  background-position: center left;
}

.todo-list li .toggle:checked + label {
    background-image: url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E);
}

.main  .todo-list li label {
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
}

.main .todo-list li .destroy {
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 25px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
}

.main .todo-list li:hover .destroy{
  display: block;
  color: #af5b5e;
}

.main .todo-list li:last-child {
  border-bottom: none;
}

.main button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main  ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.main li {
  display: list-item;
  text-align: -webkit-match-parent;
}
</style>
