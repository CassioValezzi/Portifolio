const forgotPassword = document.querySelector('.forgot');
const login = document.getElementById('login')

const email = document.getElementById('email');
const password = document.getElementById('password');



forgotPassword.addEventListener('click', () => {
    document.querySelector('.forgot-login').classList.toggle('active')

});

login.addEventListener('click', () => {
    if (email.value == '' || password.value == '') {
        alert("Um ou mais campos em branco")
    }
    else if (email.value == 'dontstop@gmail.com' && password.value == '12345') {
        alert('Acesso válido')
        window.open('https://gcperes.com/misc/dontstop.html')
    }
    else {
        alert('Senha ou usuário inválidos')
    }

});