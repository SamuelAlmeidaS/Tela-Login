let bnt_submit = document.querySelector('input#bnt-submit');
bnt_submit.addEventListener('click', (e) => {
    e.preventDefault()
    let email_user = document.querySelector('input#email-user').value;
    let password_user = document.querySelector('input#password-user').value;

    if(email_user == '' && password_user == ''){
        erro.classList.add('erro');
        erro.innerHTML = "Senha ou email errado/campos vazios"
    } else {
        alert('Seja Bem vindo(a)!')
    }
});