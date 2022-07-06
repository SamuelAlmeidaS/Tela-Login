let bnt = document.querySelector('input#bnt');

bnt.addEventListener('click', (e) => {
    e.preventDefault();
    let user = document.querySelector('input#email-user-re').value;
    let erro = document.querySelector('span.erro');
    if (user == '') {
        erro.classList.add('erro');
        erro.innerHTML = 'Digite o email do usuario!';
    } else {
        alert(`E-mail enviado com sucesso para ${user}.`);
    }
});