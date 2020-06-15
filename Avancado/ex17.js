//17 – Crie um array com os repositórios que possuam o campo language igual
//a CSS ou Python mapeie os campos name, full_name, language, has_issues, has_projects

const repos = require("../nodejs-repos.json");

const retorno = repos.filter(
  ({ language }) => language === "CSS" || language === "Python"
);

const result = retorno.map(
  ({ name, full_name, language, has_issues, has_projects }) => {
    const row = {
      name,
      full_name,
      language,
      has_issues,
      has_projects,
    };

    return { ...row };
  }
);
console.log(result);
