
const emailList = [];

for(let i = 0; i < 10; i++){
        
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => response.json())
    .then(data => {
        console.log(data.response);
        emailList.push(data.response)
    })
}