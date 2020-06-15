//16 – Crie um array com os repositórios que possuam a license mit, mapeie os
//campos informados anteriormente, mais a url da licença, e exiba-os no console.

const repos = require("../nodejs-repos.json");

const retorno = repos.filter(
  ({ license }) => license != null && license.key === "mit"
);

const result = retorno.map(
  ({
    name,
    full_name,
    description,
    language,
    created_at,
    default_branch,
    license: { url },
  }) => {
    const row = {
      name,
      full_name,
      description,
      language,
      created_at,
      default_branch,
      url,
    };

    return { ...row };
  }
);
console.log(result);
