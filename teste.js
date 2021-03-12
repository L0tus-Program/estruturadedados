/* Faça um programa que solicite duas notas A1 e A2, calcule a soma e imprima a soma e o resultado “aprovado” 
se a soma for superior ou igual a 6 e, caso contrário “reprovado”.    */


// load module
const prompt = require("./utils/prompt")
//usando
console.clear()

var a1 = prompt("Insira a1 : ", "number")
var a2 = prompt("Insira a2 : ", "number")
var soma = a1 + a2;

if (soma >= 6){
    console.log("Sua nota é ", soma, " , você foi APROVADO !!")
} else {
    console.log("Sua nota é ", soma, " , você foi REPROVADO !!")
}
