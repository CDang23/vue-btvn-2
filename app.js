const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(ev, lastName) {
      this.name = ev.target.value;
    },
    add(num) {
      this.counter = this.counter + 10;
    },
    reduce(num) {
      this.counter = this.counter - 5;
    },
    resetBtn() {
      this.counter = 0;
      this.name = '';
    }
  }
});

app.mount('#events');
