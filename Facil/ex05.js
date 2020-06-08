// 5 – Crie uma função que receba 4 parâmetros de entrada, e retorne um objeto com esses parâmetros como atributos.
// (Firstname - String,
// lastname - String,
//  email - String,
//  tags – Array de String)

function ex05(firstname, lastname, email, tags) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.email = email;
  this.tags = tags;
}
var retorne = new ex05({
  firstname: "Augusto",
  lastname: "Oliveira",
  email: "augusto.oliveira_22@hotmail.com",
  tags: [{ tags: "ex05" }],
});
console.log("Obj retornado: ", retorne.firstname);
