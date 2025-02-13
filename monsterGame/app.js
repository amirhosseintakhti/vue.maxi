function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner:null,

    };
  },
  computed: {
    monsterBarStyles() {
      if(this.monsterHealth < 0){
        return {width : '0%'}
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if(this.playerHealth < 0){
        return {width : '0%'}
      }
      return { width: this.playerHealth + "%" };
    },
    resultClass(){
      if(this.winner === 'player'){
        return 'win';
      }else if(this.winner === 'draw'){
        return 'draw'
      }else if (this.winner === 'monster'){
        return 'lose'
      }

    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw'
        // draw
      } else if (value <= 0) {
        this.winner = 'monster'
        // you lost
      }
    },
    monsterHealth(value) {
      if(value<= 0 && this.playerHealth <= 0){
        this.winner = 'draw'
        // draw
      } else if (value <= 0){
        this.winner = 'player'
        // player win
      }
    }
  },
  methods: {
    startGame(){
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.winner = null;
      this.currentRound = 0;

    },
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
    surrender(){
      this.winner = 'monster';
    }
  },
}).mount("#game");
