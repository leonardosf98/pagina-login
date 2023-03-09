const button = document.querySelector("#submit_button");

let password_value;
let email_value;
button.addEventListener("click", checkEmail);

function checkEmail() {
  email_value = document.querySelector("#input_email").value;
  let validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (validEmail.test(email_value)) {
    checkPassword();
  } else alert("Digite um e-mail válido");
}
function checkPassword() {
  password_value = document.querySelector("#input_password").value;
  let validPassword = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
  if (validPassword.test(password_value)) {
    imprimeDados();
  } else alert("Digite uma senha válida");
}

function imprimeDados() {
  document.write("<h2> Email: </h2> <p>" + email_value + "</p>");
  document.write("<h2> Senha: </h2> <p>" + password_value + "</p>");

  /*pegar conteudo dos inputs
    imprimir no console*/
}

/*criar restrições de E-Mail e-mail válido
criar restrições de senha 
pelo menos 1 maiusculo e 1 numero*/
