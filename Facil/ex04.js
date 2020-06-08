//4 – Percorra cada item do array de vegetais, utilizando o for, e exiba o seu índice e o valor.

let vegetais = ["Repolho", "Nabo", "Rabanete", "Cenoura"];
for (let index = 0; index < vegetais.length; index++) {
  let element = vegetais[index];
  console.log("retornando: ", element, index);
}
