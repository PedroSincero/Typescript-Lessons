// 1 - crie uma variável que recebe um número
let num:number = 1
// 2 - converta este número para string em uma nova variável
let convertNum = num.toString();
// 3 - esta variável de conversão deve estar tipada por inferencia
console.log(typeof convertNum);
// 4 - Imprima este número em uma string maior, utilizando o recurso de template string ou concatenação;
console.log(`Olá, o seu numero é ${convertNum}`);
