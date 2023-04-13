const userNameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const sumbitBtn = document.querySelector('#sumbit');

const secretDiv = document.querySelector('#secret-div');
const errorDiv = document.querySelector('#error');

const validUserName = 'player1';
const validPass = '1234';


sumbitBtn.addEventListener('click', ()=> {
    let userName = userNameInput.value;
    let userPassword = passwordInput.value;

    if(userName === validUserName && userPassword === validPass) {
        secretDiv.style.display = 'block';
    }
    else {
            errorDiv.style.display = 'block';
    }
});
