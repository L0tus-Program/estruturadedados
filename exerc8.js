
/* Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o
valor correspondente em graus Celsius (baseado na fórmula abaixo):
C/5=(F-32)/9
Observação: Para testar se a sua resposta está correta saiba que 100°C = 212F.  */

const prompt = require("./utils/prompt")
console.clear()


var f = prompt("Qual a temperatura em Fahrenheit ? ", "number")
var celsius = ((f - 32)/9)*5

console.log("Temp em celsius = ", celsius)



