const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "julia",
          phone: "09111763180",
          email: "juliajulia1@gmail.com",
          name: "julia jones",
        },
        {
          id: "ali",
          phone: "09111763170",
          email: "aliali1@gmail.com",
          name: "ali takhti",
        },
      ],
    };
  },
});
app.mount("#app");
