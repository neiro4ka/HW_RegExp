const patternName	= /^[а-яёА-ЯЁ\s]+$/;
const patternPhone = /^\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
const patternMail	= /^([a-z0-9_.]+\.)*[a-z0-9_.]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

let errorName = document.getElementById("user-name");
let errorPhone = document.getElementById("user-phone");
let errorMail = document.getElementById("user-mail");
let errorText = document.getElementById("user-text");


class NewForm {
    constructor(){
        this.userName = document.getElementById("user-name").value;
        this.userPhone = document.getElementById("user-phone").value;
        this.userMail = document.getElementById("user-mail").value;
        this.userText = document.getElementById("user-text").value;
    }

    _check(){
        if (this.userName == "") {
            errorName.classList.add("error");
            console.log('empty');
        } else if (patternName.test(this.userName) === false) {
            errorName.classList.add("error");
            console.log('error');
        } else {
            errorName.classList.remove("error");
            console.log('yep');
        }
        if (this.userPhone == "") {
            errorPhone.classList.add("error");
        } else if (patternPhone.test(this.userPhone) === false) {
            errorPhone.classList.add("error");
        } else {
            errorPhone.classList.remove("error");
        }
        if (this.userMail == "") {
            errorMail.classList.add("error");
        } else if (patternMail.test(this.userMail) === false) {
            errorMail.classList.add("error");
        } else {
            errorMail.classList.remove("error");
        }
        if (this.userText == "") {
            errorText.classList.add("error");
        } else {
            errorText.classList.remove("error");
        }
}
}

window.onload = () => {
    document.getElementById('valid-btn').addEventListener('click', () => {
        let validForm = new NewForm();
        validForm._check();
    })
}