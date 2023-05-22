const { createApp } = Vue;


createApp({
    data() {
        return {
            newTask: ``,
            tasks: [
                { text: "Fare la spesa", done: false },
                { text: "Pulire la camera", done: true },
                { text: "Studiare per l'esame", done: false },
                { text: "Chiamare l'idraulico", done: false }
            ],
          
        };
    },

    methods: {
        addTask() {
            console.log(this.newTask);
        }
    },
    
}).mount("#app");


