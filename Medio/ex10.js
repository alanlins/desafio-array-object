//Crie uma função que receba um objeto como parâmetro, e exiba as suas propriedades da seguinte forma:
//key: nome_da_propriedade - value: valor_da_propriedade
//(Dica: Você pode utilizar o Object.keys()

//Criar a função que recebe um objeto como parâmetro e exibir com console.log
//Percorrer e exibir o nome das propriedades do Objeto
//Percorrer e exbir o nome e o valor das propriedades do objeto

const user = {
  name: "Augusto",
  lastName: "Oliveira",
  email: "augusto.oliveira_2@hotmail.com",
};

const userData = {};
Object.keys(user).forEach(function (key) {
  userData[key] = user[key];
});

console.log(userData);
