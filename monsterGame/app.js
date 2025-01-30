function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

Vue.createApp({

    data() {
        return {
          monsterHealth: 100,
          playerHealth: 100,
        };
      },
      computed:{
        monsterBarStyles(){
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyles(){
            return { width: this.playerHealth + '%' }
        }
      },
      methods: {
        attackMonster() {
          const attackValue = getRandomValue(5, 12);
          this.monsterHealth -= attackValue; 
          this.attackPlayer();
        },
        specialAttack() {
            const attackValue = getRandomValue(10,25)
            this.monsterHealth -=attackValue;
            this.attackPlayer();
        },
        // healPlayer() {
        //   const healValue = this.getRandomValue(8, 20);
        //   this.playerHealth = Math.min(this.playerHealth + healValue, 100);
        //   this.attackPlayer();
        // },
        attackPlayer() {
          const attackValue = getRandomValue(8, 15);
          this.playerHealth -= attackValue ;
        },
      },
}).mount('#game')