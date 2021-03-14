/* Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos,  nulos  e  válidos. 
 Calcular  e  escrever  o  percentual  que  cada  um representa em relação ao total de eleitores. */


const prompt = require("./utils/prompt")
console.clear()

var eleitores = 0;
var brancos = 0;
var nulos = 0;
var validos = 0; 

while ((brancos+nulos+validos) <= eleitores){
 eleitores = 0;
 brancos = 0;
 nulos = 0;
 validos = 0;    
 eleitores = prompt ("Quantos eleitores ? ", "number") // 100%
 brancos = prompt ("Quantos votos em branco ? ", "number")
 nulos = prompt ("Quantos votos nulos ? ", "number")
 validos = eleitores - (brancos + nulos + validos)
 if ((brancos+nulos+validos) > eleitores){
     console.log("Soma de votos maior que nº de eleitores , reinicie o processo")
 } else {
     break;
 }}





console.log("Total de eleitores : ",eleitores )

console.log("% de votos brancos : ", (brancos*100)/eleitores )

console.log("% nulos : ", (nulos*100)/eleitores )

console.log("% válidos : ", (validos*100)/eleitores )




