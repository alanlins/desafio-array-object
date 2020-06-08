//4 – Percorra cada item do array de vegetais, utilizando o for, e exiba o seu índice e o valor.

let vegetais = ["Repolho", "Nabo", "Rabanete", "Cenoura"];
let result = vegetais.forEach((item, indice) => {
  console.log("Item do Array: ", item + "/" + "Indico no Array: ", indice);
});
