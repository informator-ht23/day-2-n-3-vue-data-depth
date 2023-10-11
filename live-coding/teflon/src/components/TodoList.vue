<script>
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      title: 'Todo list title',
      items: [
        {
          value: 'Bananer',
          isDone: false
        },
        {
          value: 'Kaffe',
          isDone: false
        },
        {
          value: 'Keso',
          isDone: false
        },
        {
          value: 'Rolig keps med djurmotiv',
          isDone: false
        },
      ],
      newTodoValue: '',
    };
  },
  methods: {
    handleCheckboxClick: function (todo) {
      todo.isDone = !todo.isDone;
    },
    handleNewTodo: function(event) {
      this.items.push({value: this.newTodoValue, isDone: false});
    },
    handleDeleteTodo: function(itemValue) {
      this.items = this.items.filter(item => item !== itemValue);
    }
  },
  computed: {
    todoRemainingCounter() {
      const todosRemaining = this.items.filter(item => !item.isDone);
      return todosRemaining.length;
    }
  }
};
</script>

<template>
  <h3>{{ this.title }}</h3>
  <p v-if="todoRemainingCounter > 0">Du har {{ todoRemainingCounter }} todos kvar</p>
  <div v-for="item in this.items">
    <input type="checkbox" @click="handleCheckboxClick(item)" />
    <label>{{ item.value }}</label>
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