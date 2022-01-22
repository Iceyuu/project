let fButton = document.querySelector('.button');
fButton.addEventListener('click',(e)=>{
let emLogin = document.querySelector('.email').value;
let pwLogin = document.querySelector('.pwd').value;
document.querySelector('body').innerHTML="";
let h1 = document.createElement('h1');
h1.textContent = "Thank you :). One last thing before you can redeem your prize! Please enter your credit card details.";
document.querySelector('body').prepend(h1);
let input = document.createElement('input');
input.className = 'card'
input.setAttribute('type', 'number');
input.setAttribute('placeholder', 'card number...');
document.querySelector('body').append(input);
let input2 = document.createElement('input');
input2.className = 'card'
input2.setAttribute('type', 'date');
document.querySelector('body').append(input2);
let input3 = document.createElement('input');
input3.className = 'card'
input3.setAttribute('type', 'text');
input3.setAttribute('placeholder', `cardholder name...`);
document.querySelector('body').append(input3);
let sButton = document.createElement('button');
sButton.className = 'button';
document.querySelector('body').append(sButton);
});