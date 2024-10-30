Vue.createApp({
    data(){
        return{
            counter:0,
            name:''

        };
    },
    computed:{
        fullname(){
            console.log('running again...');
            if(this.name === ''){
                return '';
            }
            return this.name + '' + "takhti";
        },
    },
    methods:{
        
        add(num){
            console.log('rerendered shod...')
            this.counter = this.counter + num;
        },
        reduce(num){
            this.counter = this.counter - num;
        },

    }
}).mount('#app');