<script>
import books from './../../data/childrenbooks';

console.log(books)

export default {
  data() {
    return {
      books,
      activeId: 0
    }
  },
  methods: {
    toggleBookPlot: function(bookId) {
      if(bookId == this.activeId) {
        this.activeId = 0;
      } else {
        this.activeId = bookId;
      }
    }
  },
  beforeMount: function() {
    this.activeId = this.$route.params.bookId
  }
}
</script>

<template>

  <div @click="toggleBookPlot(book.id)" class="book-card" v-for="book in books">
    <p> {{ book.title }}</p>
    <p v-if="book.id == activeId"> {{ book.plot }}</p>
  </div>

</template>


<style>
  .book-card {
    border: 1px solid rgb(202, 202, 202);
    padding: .5em;
    margin: .5em;
    color: white;
  }
</style>