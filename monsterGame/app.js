Vue.createApp({

    data(){
        return{
            monsterHealth:100,
            playerHealth:100,

        }
    },
    methods:{
        attackMonster(){
            const attackvalue = getRandomValue(5,12)
            this.monsterHealth -= attackvalue;
            this.attackPlayer();
        },
        attackPlayer(){
            const attackvalue = getRandomValue(5,12)
            this.playerHealth -= attackvalue;
        }
    }
}).mount('#game')