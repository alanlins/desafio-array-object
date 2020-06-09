//8 – Utilizando o método forEach do array, exiba o valor e o índice do array de vegetais

const vegetais = ["Repolho", "Nabo", "Rabanete", "Cenoura"];
let result = vegetais.forEach((item, indice) => {
  console.log("Item do Array: ", item + "/" + "Indico no Array: ", indice);
});
