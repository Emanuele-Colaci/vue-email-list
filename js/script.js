const { createApp } = Vue

createApp({
    data(){
        return{
            email: '',
            arrayEmail: []
        }
    },
    mounted(){
        this.createEmail();
    },
    methods:{
        createEmail(){
            for(let i = 1; i <= 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
                    this.arrayEmail.push(email.data.response);
                });
            }
        }
    },
}).mount('#app')