const { createApp } = Vue;


createApp({
    data() {
        return {
            newTask: ``,
            tasks: [
                { text: "Fare la spesa", done: false },
                { text: "Pulire la camera", done: true },
                { text: "Studiare per l'esame", done: true },
                { text: "Chiamare l'idraulico", done: false }
            ],
          
        };
    },

    methods: {
        addTask() {
            this.tasks.push({ text: this.newTask, done: false });
            this.newTask = ``;
        }
    },
    
}).mount("#app");


