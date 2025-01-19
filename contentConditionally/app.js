const app = Vue.createApp({
  data() {
    return {
      goalValue: "",
      goals: [],
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },

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
