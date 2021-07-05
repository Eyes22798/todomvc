<template>
  <div class="header">
    <input
      v-model="data"
      autofocus="autofocus"
      autocomplete="off"
      placeholder="What needs to be done?"
      class="new-todo"
      @change="handleChange"
    >
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data () {
    return {
      data: '',
      listData: JSON.parse(localStorage.getItem('list')) || []
    }
  },
  methods: {
    handleChange() {
      if (this.data) {
        this.listData.push(this.data)
        this.$store.dispatch('setTextValue', {
          text: this.data,
          index: this.listData.indexOf(this.data)
        })
        this.listData.length > 0 && localStorage.setItem('list', JSON.stringify(this.listData))
      }
      this.data = ''
    }
  }
}
</script>

<style scoped>
  .header {
    display: block;
  }

  .header .new-todo {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  }

  .new-todo, .edit {
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

  .header input.new-todo:focus {
    outline: none;
    background-color: transparent;
    border: 0px solid;
  }
  
</style>
