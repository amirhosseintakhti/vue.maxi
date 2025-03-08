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
});

app.mount('#app');