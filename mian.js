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
          id: 2,
          name: "Lutfilla",
          email: "Lutfilla@gmail.com",
          job: "Mobile development",
        },
        {
          id: 3,
          name: "Shomirza",
          email: "Shomirza@gmail.com",
          job: "Node Js ",
        },
        {
          id: 4,
          name: "Qulpiddin",
          email: "Qulpiddin@gmail.com",
          job: "G'irt bekorchi",
        },
      ],
      id: "",
      name: "",
      email: "",
      job: "",
      errorHnadle: "",
      error: false,
      handleUserid: null,
    };
  },

  methods: {
    Cancellation() {
      return (this.error = false);
    },

    Delete(index) {
      this.data.splice(index, 1);
    },
    addUser() {
      if (this.handleUserid != null) {
        let findById = this.data.find((user) => user.id == this.handleUserid);
        findById.name = this.name;
        findById.email = this.email;
        findById.job = this.job;
        this.handleUserid = null;
        this.name = "";
        this.email = "";
        this.job = "";
  
      } else if (this.name == "" && this.email == "" && this.job == "") {
        this.error = true;
        this.errorHnadle = "Please enter empty Name and Email and Job";
        return;
      } else{

      let newUser = {
        id: this.data.length + 1,
        name: this.name,
        email: this.email,
        job: this.job,
      };
      this.error = false;

      this.data.push(newUser);
      this.name = "";
      this.email = "";
      this.job = "";

    }
    },

    Update(id) {
      let findById = this.data.find((user) => user.id == id);
      (this.name = findById.name),
        (this.email = findById.email),
        (this.job = findById.job);
      this.handleUserid = id;
    },
  },

  computed: {},
});

app.mount("#firdavs");
