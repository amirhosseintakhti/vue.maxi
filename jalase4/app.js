Vue.createApp({
    data(){
        return{
            name:'',
        };
    },
    methods: {
        setName(lastName){
            this.name = event.target.value + ' ' + lastName;
        },
    } 
}).mount('#events');
