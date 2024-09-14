Vue.createApp({
    data(){
        return{
            name:'',
        };
    },
    methods: {
        setName(event){
            this.name = event.target.value;
        },
    } 
}).mount('#events');
