//14 – Crie um array com os repositórios que possuam o campo language nulo,
//mapeie somente os campos informados anteriormente, e exiba-os no console.

const repos = require("../nodejs-repos.json");

const retorno = repos.filter(({ language }) => language === null);

const result = retorno.map(
  ({ name, full_name, description, language, created_at, default_branch }) => {
    const row = {
      name,
      full_name,
      description,
      language,
      created_at,
      default_branch,
    };

    return { ...row };
  }
);
console.log(result);
