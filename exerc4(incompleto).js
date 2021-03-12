/* Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos,  nulos  e  válidos. 
 Calcular  e  escrever  o  percentual  que  cada  um representa em relação ao total de eleitores. */


const prompt = require("./utils/prompt")
console.clear()

var eleitores = 0;
var brancos = 0;
var nulos = 0;
var validos = 0;

/*while ((brancos+nulos+validos) <= eleitores){
 eleitores = prompt ("Quantos eleitores ? ", "number") // 100%
 brancos = prompt ("Quantos votos em branco ? ", "number")
 nulos = prompt ("Quantos votos nulos ? ", "number")
 validos = prompt ("Quantos votos válidos ? ", "number")
 if ((brancos+nulos+validos) > eleitores){
     console.log("Soma de votos maior que nº de eleitores , reinicie o processo")
 }else{
     //pass
 }
} */

// var x;

/*eleitores - 100
brancos - x

x * eleitores = brancos * 100

x = (brancos * 100)/ eleitores
*/

console.log("Total de eleitores : ",eleitores )

console.log("% de votos brancos : ", (brancos*100)/eleitores )

console.log("% nulos : ", (nulos*100)/eleitores )

console.log("% válidos : ", (validos*100)/eleitores )




