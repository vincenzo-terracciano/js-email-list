/* Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */

/* select DOM elements */
const emailListEl = document.getElementById("emailList");


const emailList = [];

for(let i = 0; i < 10; i++){
        
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => response.json())
    .then(data => {
        console.log(data.response);
        emailList.push(data.response)

        const email = document.getElementById("li")
        email.append(data.response)
        emailListEl.appendChild(email)
    })
}

