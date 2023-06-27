const login = document.getElementById('login__button')

const login__username = document.getElementById('login__username');
const login__password = document.getElementById('login__password');


login__button.addEventListener('click', () => {
    if (login__username.value == '' || login__password.value == '') {
        alert("Um ou mais campos em branco")
    }
    else if (login__username.value == 'Admin' && login__password.value == '123456') {
        alert('Acesso válido')
        window.open('https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021')
    }
    else {
        alert('Senha ou usuário inválidos')
    }

});


window.addEventListener('load', function () {
    alert('Bem-vindo ao FreshTrack!');
});