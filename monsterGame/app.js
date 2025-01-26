Vue.createApp({

    data() {
        return {
          monsterHealth: 100,
          playerHealth: 100,
        };
      },
      methods: {
        attackMonster() {
          const attackValue = this.getRandomValue(5, 12);
          this.monsterHealth = Math.max(this.monsterHealth - attackValue, 0);
          this.attackPlayer();
        },
        specialAttack() {
          const attackValue = this.getRandomValue(10, 25);
          this.monsterHealth = Math.max(this.monsterHealth - attackValue, 0);
          this.attackPlayer();
        },
        healPlayer() {
          const healValue = this.getRandomValue(8, 20);
          this.playerHealth = Math.min(this.playerHealth + healValue, 100);
          this.attackPlayer();
        },
        attackPlayer() {
          const attackValue = this.getRandomValue(5, 15);
          this.playerHealth = Math.max(this.playerHealth - attackValue, 0);
        },
        getRandomValue(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        },
      },
}).mount('#game')