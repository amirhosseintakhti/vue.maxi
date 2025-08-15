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
    },
    created(){
        const stored = localStorage.getItem('books')
        this.books = stored ? JSON.parse(stored) : []
    },
    methods:{
        addBook(book){
            this.book.push(book)
            localStorage.setItem('books', JSON.stringify(this.books))
        },
        toggleRead(id) {
            
        }
    }
}
</script>