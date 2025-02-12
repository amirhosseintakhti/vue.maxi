function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // draw
      } else if (value <= 0) {
        // you lost
      }
    },
    monsterHealth(value) {
      if(value<= 0 && this.playerHealth <= 0){
        // draw
      } else if (value <= 0){
        // player win
      }
    }
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    specialAttack() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
  },
}).mount("#game");
