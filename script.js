let btnincrease=document.querySelector('#increase');
let btndecrease=document.querySelector('#decrease');
let counterDOM=document.querySelector('#counter');
let counter=0;

counterDOM.innerHTML=counter

btnincrease.addEventListener('click',clickEvent)
btndecrease.addEventListener('click',clickEvent)

function clickEvent() {
    console.log(this.id)
    this.id == "increase" ? counter +=1 : counter -=1
    counterDOM.innerHTML=counter

}