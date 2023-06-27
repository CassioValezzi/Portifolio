const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const menssage = document.getElementById('menssage')
const send = document.getElementById('send-all')





send.addEventListener('click', () => {
    if (name.value == '' || email.value == '' || phone.value == '' || menssage.value == '') {
        alert("Um ou mais campos em branco")
    }
    else {
        alert('Obrigado por entrar em contato com a gente')
    }

});