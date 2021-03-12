/* O custo de um carro novo ao consumidor é a soma do custo de fábrica com a 
porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
 Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler ocusto de fábrica de um carro, 
 calcular e escrever o custo final ao consumidor. */

const prompt = require("./utils/prompt")
console.clear()



// percentual distribuidor 28%
// impostos 45%

var cusfab = prompt ("Custo : ", "number")
var x = cusfab * 0.28 //calcula valor percentual distribuidor
var y = cusfab * 0.48
var cusfi = cusfab + x + y

console.log("Final = R$ ", cusfi)




