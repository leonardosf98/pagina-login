const button = document.querySelector("#submit_button");

const password_value = document.querySelector("#input_password").value;
const email_value = document.querySelector("#input_email").value;
button.addEventListener("click", checkEmail);

function checkEmail() {
  if (email_value.includes("@")) {
    checkPassword();
  } else alert("digite um e-mail válido");
}

function checkPassword() {
  if (password_value.length >= 8) {
    imprimeDados();
  } else alert("digite uma senha válida");
}

button.addEventListener("click", checkEmail);

function checkEmail() {
  let email_value = document.querySelector("#input_email").value;
  let password_value = document.querySelector("#input_password").value;

  if (email_value.includes("@")) {
    checkPassword();
  } else alert("Digite um e-mail válido");
}
function checkPassword() {
  if(password_value.length >= 8 && ){
    imprimeDados();
  } else (alert("Digite uma senha válida"))
}

function imprimeDados() {
  console.log(email_value);
  console.log(password_value);
  /*pegar conteudo dos inputs
    imprimir no console*/
}

/*criar restrições de E-Mail e-mail válido
criar restrições de senha 
pelo menos 1 maiusculo e 1 numero*/
