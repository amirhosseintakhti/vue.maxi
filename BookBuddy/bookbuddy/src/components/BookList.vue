<template>
  <ul>
    <book-item
      v-for="book in books"
      :key="book.id"
      :book="book"
      @toggle-read="$emit('toggle-read', $event)"
    />
  </ul>
</template>

<script>
import BookItem from "./BookItem.vue";
export default {
  components: { BookItem },
  props: ["books"],
  emits: ["toggle-read"],
};
</script>

<style></style>
 