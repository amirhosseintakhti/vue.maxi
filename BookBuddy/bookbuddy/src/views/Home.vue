<template>
    <section>
        <add-edit-book @submit-book="addBook"></add-edit-book>
        <book-list :books="books" @toggle-read="toggleRead"></book-list>
    </section>
</template>

<script>
import AddEditBook from '../components/AddEditBook.vue'

export default {
    components:{
        AddEditBook,BookList
    },
    data(){
        return{
            books:[]
        }
    }
}
</script>