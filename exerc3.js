/* Faça  um  algoritmo  que  leia  a  idade de  uma  pessoa  expressa  em  anos,  meses  e  dias
  e escreva a idade dessa pessoa expressa apenas em dias. 
Considerar ano com 365 dias e mês com 30 dias. */

const prompt = require("./utils/prompt")
console.clear()


var ano = prompt("Anos : ", "number")
var mes = prompt("Meses : ", "number")
var dia = prompt("Dias : ", "number")

var final = ano*365 + mes*30 + dia

console.log("Você tem ", final, "dias de idade")

