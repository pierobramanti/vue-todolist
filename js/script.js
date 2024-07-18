const { createApp } = Vue;

createApp({
  data() {
    return {
      todo: [
        {
          text: "andare dal medico",
          done: false
        },
        {
          text: "comprare il regalo per la fidanzata",
          done: false
        },
        {
          text: "stampare i biglietti dell'aereo",
          done: false
        },
        {
          text: "andare in palestra",
          done: false
        },
        {
          text: "tagliare la barba",
          done: false
        },
        {
          text: "preparare la cena",
          done: false
        },
      ],
    }
  },
  methods: {
    ListDone(i) {
      this.todo[i].done = true;
      console.log(this.todo[i].done);
    },

    remove(i){
        if(confirm("Sicuro di voler eliminare questo impegno?")){
            this.todo.splice(i, 1)
        }
        
    }
  }
}).mount('#app');