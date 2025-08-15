<template>
    <form @submit.prevent="submitForm" class="add-edit-book">
        <input v-model="title" type="text" placeholder="عنوان کتاب" required />
        <input v-model="author" type="text" placeholder="نویسنده" required />
        <button type="submit">افزودن کتاب</button>
    </form>
</template>

<script>
export default{
    
}
</script>