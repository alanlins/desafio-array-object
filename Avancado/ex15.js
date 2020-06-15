//15 – Exiba a quantidade de repositórios que possuam o campo license como nulo.
const repos = require("../nodejs-repos.json");

const repositoryQuatidade = repos.filter(({ license }) => license === null);
const result = repositoryQuatidade.map(({ license }) => {
  const row = { license };
  return { ...row };
});
console.log("campos do tipo null", result);
console.log("Quantidade", repositoryQuatidade.length);
