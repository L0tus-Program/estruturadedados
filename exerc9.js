/* Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste
aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para
o cálculo da média final é:
mediafinal=(n1*2+n2*3+n3*5)/10 */

const prompt = require("./utils/prompt")
console.clear()

var a = prompt ("Insira a nota 1  ", "number") //peso 2
var b = prompt ("Insira a nota 2  ", "number") //peso 3
var c = prompt ("Insira a nota 3  ", "number")//peso 5
var media = (a*2 + b*3 + c*5 ) /10

console.log("Média final = ", media)