const app = Vue.createApp({
  data() {
    return {
      data: [
        {
          id: 1,
          name: "Firdavs",
          email: "firdavs@gmail.com",
          job: "Fronted development",
        },
        {
          id: 1,
          name: "Lutfilla",
          email: "Lutfilla@gmail.com",
          job: "Mobile development",
        },
        {
          id: 1,
          name: "Shomirza",
          email: "Shomirza@gmail.com",
          job: "Node Js ",
        },
        {
          id: 1,
          name: "Qulpiddin",
          email: "Qulpiddin@gmail.com",
          job: "G'irt bekorchi",
        },
      ],
      name: "",
      email: "",
      job: "",
      errorHnadle: "",
      error: false,
    };
  },

  methods: {

    Cancellation(){

     return this.error = false;
    },

    Delete(index) {
      this.data.splice(index, 1);
    },
    addUser() {
      if (this.name == "" && this.email == "" && this.job == "") {
        this.error = true;
        this.errorHnadle = "Please enter empty Name and Email and Job";
        return;
      }

      let newUser = {
        name: this.name,
        email: this.email,
        job: this.job,
      };
      this.error = false;

      this.data.push(newUser);
      this.name = "";
      this.email = "";
      this.job = "";
    },

    Update(index) {
      this.data.filters((list) => {
        // this.name = list.name,
        // this.email = list.email,
        // this.job = list.job
        console.log(list);
      });
    },
   
  },

  computed: {},
});

app.mount("#firdavs");
