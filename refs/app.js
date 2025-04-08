const app = Vue.createApp({
    data(){
        return{
            currentMessage:'',
            message:'vue is great'
        };
    },
    methods:{
        input(){

        },
        setText(){
            // this.message = this.currentMessage;
            this.message = this.$refs.userText.value;
        },

    },
    beforeCreate(){
        console.log('before create')
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('before mount')
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
    },
    updated(){
        console.log('updated')
    },
    beforeUnmount(){
        console.log('beforeUnmount')
    },
    unmounted(){
        console.log('unmounted')
    }
});

app.mount('#app');
// setTimeout(function() {
//     app.unmount();
// }, 3000);

