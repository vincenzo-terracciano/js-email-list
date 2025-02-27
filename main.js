/* Descrizione
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */

/* select DOM elements */
const emailListEl = document.getElementById("emailList");
const randomButtonEl = document.querySelector(".random-button")

/* create function to generate 10 random emails */
function randomEmail(){

/* set empty string to remove the emails on each click */
emailListEl.innerHTML = "";

/* declare an empty array to push 10 random emails inside */
const emailList = [];

/* set for loop to iterate 10 times */
for(let i = 0; i < 10; i++){
        
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => response.json())
    .then(data => {
        console.log(data.response);
        emailList.push(data.response)

        /* create <li> element */
        const email = document.createElement("li")
        
        /* append every email in <li> */
        email.append(data.response)

        /* append every <li> in <ul> */
        emailListEl.appendChild(email)
    })
}
}

/* invoke function */
randomEmail()

/* on button's click generate other 10 email */
randomButtonEl.addEventListener("click", randomEmail);

