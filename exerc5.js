/*  Escreva um algoritmo para ler o salário mensal atual de um funcionário
 e o percentual de reajuste.Calcular e escrever o valor do novo salário.  */ 

const prompt = require("./utils/prompt")
console.clear()

var sal = prompt("Qual o salário atual ? ", "number")
var aumento = prompt("Qual a % do aumento ? ", "number")
var x = sal * aumento/100;
var salnew = sal + x

console.log("Salário novo = ", salnew)



