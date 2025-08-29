<template>
  <section>
    <add-edit-book @submit-book="addBook"></add-edit-book>
    <book-list :books="books" @toggle-read="toggleRead"></book-list>
    <div class="bg-blue-500 text-white p-4">تست Tailwind</div>
    <template>
    </template>
  </section>
</template>

<script>
import AddEditBook from "../components/AddEditBook.vue";
import BookList from "@/components/BookList.vue";

export default {
  components: {
    AddEditBook,
    BookList,
  },
  data() {
    return {
      books: [],
    };
  },
  created() {
    const stored = localStorage.getItem("books");
    this.books = stored ? JSON.parse(stored) : [];
  },
  methods: {
    addBook(book) {
      this.books.push(book);
      localStorage.setItem("books", JSON.stringify(this.books));
    },
    toggleRead(id) {
      const book = this.books.find((item) => item.id === id);
      if (book) {
        book.read = !book.read;
      }
      console.log(this.books);
    },
  },
};
</script>
