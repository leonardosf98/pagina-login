const button = document.querySelector("#submit_button");

let password_value;
let email_value;
button.addEventListener("click", checkEmail);

function checkEmail() {
  email_value = document.querySelector("#input_email").value;
  console.log(email_value);
  if (email_value.includes("@")) {
    checkPassword();
  } else alert("Digite um e-mail válido");
}
function checkPassword() {
  password_value = document.querySelector("#input_password").value;
  console.log(password_value);
  if (password_value.length >= 8) {
    imprimeDados();
  } else alert("Digite uma senha válida");
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
