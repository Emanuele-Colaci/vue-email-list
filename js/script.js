const { createApp } = Vue

createApp({
    data(){
        return{
            emails: '',
            arrayEmails: []
        }
    },
    mounted(){
        this.createEmails();
    },
    methods:{
        createEmails(){
            for(let i = 1; i <= 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
                    this.arrayEmails.push(email.data.response);
                });
            }
        }
    },
}).mount('#app')