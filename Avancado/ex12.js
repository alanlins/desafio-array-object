const repos = require("../nodejs-repos.json");

const result = repos.map(
  ({ name, full_name, description, language, created_at }) => {
    const row = { name, full_name, description, language, created_at };

    return { ...row };
  }
);
console.log(result);
