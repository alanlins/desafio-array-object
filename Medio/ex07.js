//7 – Utilizando o array de vegetais, encontre o primeiro item cujo tamanho da string seja igual a 7 (utilizar método find)

const vegetais = ["Repolho", "Nabo", "Rabanete", "Cenoura"];
let tamanho = vegetais.find((t) => t.length == 7);
console.log(tamanho);
