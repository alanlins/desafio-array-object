//11 – Faça a mesma lógica da questão anterior de exibir os atributos e valores do objeto,
//mas dessa vez utilize o método toString() dos objetos,
//criando sua própria implementação dele. Pode usar console.log para imprimir na tela.

function ex05(firstname, lastname, email, tags) {
  return {
    firstname: firstname,
    lastname: lastname,
    email: email,
    tags: tags,
  };
}

function exibir() {
  return ex05("Augusto", "Oliveira ", "augusto.oliveira_22@hotmmail.com", [
    { tags: "Primeiro Codigo" },
  ]);
}
const toResultOne = Object.keys(exibir());
const toResultTwo = Object.values(exibir());

console.log(toResultOne.toString());
console.log(toResultTwo.toString());
