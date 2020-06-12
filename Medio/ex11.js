//11 – Faça a mesma lógica da questão anterior de exibir os atributos e valores do objeto,
//mas dessa vez utilize o método toString() dos objetos,
//criando sua própria implementação dele. Pode usar console.log para imprimir na tela.

const user = {
  name: "Augusto",
  sobrenome: "Oliveira",
  email: "Augusto@Hotmail.com",
};
const toEmail = user.email.toString();
const toResult = user.name.toString();
const toResolve = user.sobrenome.toString();
console.log("name:", toResult, "/", "sobrenome:", toResolve, "email:", toEmail);
