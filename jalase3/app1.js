Vue.createApp({
    data(){
        return{
            counter:0,
        };
    },
    methods: {
        add(){
            this.counter = this.counter+1;
        },
        reduse(){
            this.counter = this.counter -1;
        },
    } 
}).mount('#events');
