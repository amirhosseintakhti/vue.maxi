<template>
  <form @submit.prevent="submitForm" class="add-edit-book">
    <input v-model="title" type="text" placeholder="عنوان کتاب" required />
    <input v-model="author" type="text" placeholder="نویسنده" required />
    <button type="submit">افزودن کتاب</button>
  </form>
</template>

<script>
export default {
  emits: ["submit-book"],
  data() {
    return {
      title: "",
      author: "",
    };
  },
  methods: {
    submitForm() {
      const t = this.title.trim();
      const a = this.author.trim();
      if (!t || !a) return;

      this.$emit("submit-book", {
        id: Date.now(),
        title: t,
        author: a,
        read: false,
      });

      this.title = '';
      this.author = '';
    },
  },
};
</script>

<style scoped>
.add-edit-book {
  display: flex;
  gap: 0.5rem;
}
.add-edit-book input {
  flex: 1;
  padding: 0.4rem;
}
.add-edit-book button {
  padding: 0.4rem 1rem;
}
</style>
