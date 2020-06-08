// 5 – Crie uma função que receba 4 parâmetros de entrada, e retorne um objeto com esses parâmetros como atributos.
// (Firstname - String,
// lastname - String,
//  email - String,
//  tags – Array de String)

function ex05(firstname, lastname, email, tags) {
  return {
    firstname: firstname,
    lastname: lastname,
    email: email,
    tags: tags,
  };
}

console.log(
  ex05("Augusto", "Oliveira ", "augusto.oliveira_22@hotmmail.com", [
    { tags: "Primeiro Codigo" },
  ])
);
