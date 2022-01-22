let fButton = document.querySelector('.button');
fButton.addEventListener('click',(e)=>{
let emLogin = document.querySelector('.email').value;
let pwLogin = document.querySelector('.pwd').value;
document.querySelector('body').innerHTML="";
console.log(emLogin);
console.log(pwLogin);
});