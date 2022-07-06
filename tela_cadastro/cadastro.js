let bnt = document.querySelector('input#bnt');

bnt.addEventListener('click', (e) => {
    e.preventDefault();
    let firstName = document.querySelector('input#name-user').value;
    let lastName = document.querySelector('input#last-name-user').value;
    let newEmail = document.querySelector('input#email-user-creater').value;
    let confirmEmail = document.querySelector('input#confirm-email-user').value;
    let newPassword = document.querySelector('input#password-user-creater').value;
    let confirmPassword = document.querySelector('input#confirm-password-user').value;
    let erro = document.querySelector('span.error');

    if(firstName == '') {
        erro.classList.add('erro');
        erro.innerHTML = "<strong>Erro! Veja se não tem algo errado!</strong>";
    }

   if(newEmail != confirmEmail && newEmail == '' && confirmEmail == ''){
        erro.classList.add('erro');
        erro.innerHTML = "<strong>Erro! Veja se não tem algo errado!</strong>";

   } else if(newPassword != confirmPassword && newPassword == '' && confirmEmail == ''){
        erro.classList.add('erro');
        erro.innerHTML = "<strong>Erro! Veja se não tem algo errado!</strong>";

   } else {
        alert(`Cadastro realizado com sucesso! Seja bem vindo(a) ${firstName} ${lastName}`); 
   }

});
