let regButton = document.querySelector(".continue");
regButton.addEventListener("click", (e)=>{
    let login = document.querySelector(".name").value;
    let pwd = document.querySelector(".pwd").value;
    let pwdVerification = document.querySelector(".pwd-verif").value;
    let email = document.querySelector(".email").value;
    let bday = document.querySelector(".bday").value;
    console.log(pwd);
    console.log(pwdVerification);
    if (pwd == pwdVerification && pwd.length > 5 && pwd[0].toUpperCase() == pwd[0]) {
        document.querySelector('.pwd').style.background = ''
        document.querySelector('.pwd').style.border = ''
        document.querySelector('.pwd').style.outline = ''
        document.querySelector('.pwd-verif').style.background = ''
        document.querySelector('.pwd-verif').style.border = ''
        document.querySelector('.pwd-verif').style.outline = ''
    } else {
        document.querySelector('.pwd').style.background = 'rgb(255 169 169)'
        document.querySelector('.pwd').style.border = '1px solid #f75d5d'
        document.querySelector('.pwd').style.outline = 'none'
        document.querySelector('.pwd-verif').style.background = 'rgb(255 169 169)'
        document.querySelector('.pwd-verif').style.border = '1px solid #f75d5d'
        document.querySelector('.pwd-verif').style.outline = 'none'
    };
    if (login.length <= 2) {
        document.querySelector('.name').style.background = 'rgb(255 169 169)'
        document.querySelector('.name').style.border = '1px solid #f75d5d'
        document.querySelector('.name').style.outline = 'none'
    } else {
        document.querySelector('.name').style.background = ''
        document.querySelector('.name').style.border = ''
        document.querySelector('.name').style.outline = ''
    };
});