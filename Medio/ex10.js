//10 – Crie uma função para exibir os atributos e os valores do objeto da questão 5. (Dica: utilizar as funções já existente em objetos
//JavaScript para atributos e os valores -> keys() e values()). Pode usar console.log para imprimir na tela.

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

console.log(Object.keys(exibir()));
console.log(Object.values(exibir()));
