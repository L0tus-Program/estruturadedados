/* Escreva  um  algoritmo  para  ler  as  dimensões  de  um  retângulo  (base  ealtura),  calcular  e escrever a área do retângulo. */

const prompt = require("./utils/prompt")
console.clear()

var base = prompt("Insira a base : ", "number" )
var alt = prompt("Insira a altura : ", "number" )
/*var area = base * alt
console.log ("Area = ", area)
*/
console.log ("Area = ", base*alt)