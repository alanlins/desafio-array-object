//6 – A partir do array de numbers, crie um array com os valores maiores do que 5 (utilizar método filter)

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArray = numbers.filter((num) => num > 5);

console.log("Novo array criado: ", newArray);
