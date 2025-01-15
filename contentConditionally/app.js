const app = Vue.createApp({
  data() {
    return {
      goalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      const trimmedGoal = this.goalValue.trim();
      if (trimmedGoal) {
        this.goals.push(this.goalValue);
        this.goalValue = "";
      }
    },
  },
});

app.mount("#app");
