const app = Vue.createApp({
  data() {
    return {
      friends:
        [{
          id: "julia",
          phone: "09111763180",
          email: "juliajulia1@gmail.com",
          name: "julia jones",
        },
        {
            id: "ali",
          phone: "09111763180",
          email: "aliali1@gmail.com",
          name: "ali takhti",
        },
    ],
    //   detailAreVisblity: false,
    };
  },
});

app.component('friend-details', {
  template: `
     <li>
                <h2>{{friend.name}}</h2>
                <button @click="toggleDetails">{{detailAreVisblity?'hide':'show'}} list</button>
                <ul v-if="detailAreVisblity">
                    <li>{{friend.phone}}</li>
                    <li>{{friend.email}}</li>
                </ul>
            </li>

    `,
  data() {
    return {
      friend: {
        id: "julia",
        phone: "09111763180",
        email: "juliajulia1@gmail.com",
        name: "julia jones",
      },
      detailAreVisblity: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailAreVisblity = !this.detailAreVisblity;
    },
  },
});
app.mount("#app");
