<script>
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      title: 'Todo list title',
      items: ['Bananer', 'Kaffe', 'Keso', 'Rolig keps med djurmotiv'],
      counter: 4,
      newTodoValue: 'hej',
    };
  },
  methods: {
    handleCheckboxClick: function (event) {
      if (event.target.checked) {
        this.counter--;
      } else {
        this.counter++;
      }
    },
    handleNewTodo: function(event) {
      this.items.push(this.newTodoValue);
      this.counter++;
    },
    handleDeleteTodo: function(itemValue) {
      // const todoIndex = this.items.indexOf(itemValue);
      // this.items.splice(todoIndex, 1)
      this.items = this.items.filter(item => item !== itemValue);

      const checkboxes = document.querySelectorAll('input[checked]');

      this.counter = this.items.length - checkboxes.length;
    }
  },
};
</script>

<template>
  <h3>{{ this.title }}</h3>
  <p v-if="counter > 0">Du har {{ counter }} todos kvar</p>
  <!-- <TodoItem  v-for='item in this.items' :text='item'/> -->
  <div v-for="item in this.items">
    <input type="checkbox" @click="handleCheckboxClick" />
    <label>{{ item }}</label>
    <button @click="handleDeleteTodo(item)" class="del-btn">X</button>
  </div>

  <div>
    <input v-model="newTodoValue" type="text" placeholder="Yoghurt med ketchupsmak" />
    <button 
      @click="handleNewTodo" 
      class="new-todo-btn" 
      :class="{ 
        'disabled-btn': newTodoValue.length < 1, 
        'cool-border': newTodoValue.length > 3
      }" 
      :disabled="newTodoValue.length < 1">Lägg till todo</button>
  </div>

  <p>{{ newTodoValue }}</p>
</template>


<style>
  .del-btn {
    margin-left: 1em;
  }

  .new-todo-btn {
    border: none;
    margin: .5em;
    border-radius: .3em;
    padding: .2em .3em;
    background-color: rgb(129, 255, 75);
    font-size: 1em;
  }

  .disabled-btn {
    background-color: rgb(75, 120, 255);
  }

  .cool-border {
    border: 2px white dashed;
  }
</style> 