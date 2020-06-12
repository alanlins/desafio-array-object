//13- Crie um array com os repositórios que possuem o campo default_branch com o valor
//de master, mapeie somente os campos informados anteriormente, e exiba-os no console.

const repos = require("../nodejs-repos.json");

const result = repos.map(
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
