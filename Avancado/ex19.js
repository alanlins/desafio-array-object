//19 – Considere os seguintes critérios:

//  a – Crie uma constante do tipo Array. (Esse array será uma lista com objetos que virão através das funções da letra B).

//  b – Crie uma constante do tipo objeto que possua 4 funções: GET, POST, PUT, DELETE

//  c – Crie toda a lógica de inserir, atualizar, deletar ou buscar objetos dentro do array.

//Obs: O objeto a ser manipulado pode ser o mesmo da questão 5.

//Obs2: O GET pode ser feito por qualquer atributo disponível.

let profile = [
  {
    id: 1,
    firstname: "augusto",
    lastname: "oliveira",
    email: "auugsot.olaisdia.com",
  },
];

const crud = {
  buscar() {
    return profile;
  },
  buscarTeste(obj) {
    const keys = Object.keys(obj);
    const property = keys[0];
    const result = profile.filter((r) => r[property] === obj[property]);
    return result;
  },
  buscarPorCampos(obj) {
    const keys = Object.keys(obj);
    const property = keys[0];
    const result = profile.filter((p) => {
      const isString = typeof p[property] === "string";
      return isString
        ? p[property].includes(obj[property])
        : p[property] === obj[property];
    });
    return result;
  },
  search(search, fields) {
    const result = profile.filter((p) => fields.some((k) => p[k] === search));
    const result1 = profile.filter((p) => p);
    return result;
  },
  inserir(obj) {
    profile.push(obj);
    return profile;
  },
  deletar(firstname) {
    const oldLength = profile.length;
    profile = profile.filter((p) => p.firstname !== firstname);
    const newLength = profile.length;
    const removed = newLength < oldLength;
    return removed;
  },

  atualizar(firstname, obj) {
    const index = profile.findIndex((a) => a.firstname === firstname);
    if (index === -1) return false;
    const oldObj = profile[index];
    const newObj = { ...oldObj, ...obj };
    profile[index] = newObj;
    return newObj;
  },
};

//console.log(crud.buscar());
//console.log(crud.inserir({ name: "oliveira", sobrenome: "guto" }));
//3º console.log(crud.deletar((firstname = "augusto")));
// console.log(profile);
// console.log(
//   crud.atualizar("augusto", { firstname: "Olivera", lastname: "gugu" })
// );
// // console.log(crud.buscarPorCampos());
// console.log(crud.buscarPorCampos({ firstname: "aug" }));
console.log(crud.buscarTeste({ firstname: "augusto" }));
//console.log(crud.search(1, ["firstname", "lastname", "id"]));
