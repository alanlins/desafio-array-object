//18 – Crie um array com os repositórios que tenham menos de 50 forks.

const repos = require("../nodejs-repos.json");

const retorno = repos.filter(({ forks }) => forks < 50);

console.log(retorno);
