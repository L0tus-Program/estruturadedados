/*Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo
por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das
vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele
vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro
vendido. Calcule e escreva o salário final do vendedor.*/

const prompt = require("./utils/prompt")
console.clear()

// nº de carros vendidos
// valor total das vendas
// salario fixo
// comissao fixa por carro
// 5% de comssao venda


var salario = prompt ("Insira salário fixo : ", "number") // salario fixo
//var comissao = prompt ("Qual a porcentagem de comissão pór cada carro vendido ? ", "number"); // comissao por carros vendidos 
var sellcar = prompt ("Quantos carros foram vendidos ? ", "number"); // total de carros vendidos
var vendas = prompt ("Valor total das vendas ?", "number" ) // valor total das vendas
var valorcarro = prompt ("Quanto ele recebe por cada carro ?", "number") //recebido por carro
var x = vendas *0.05        // 5% das vendas
var recebido = salario + (valorcarro * sellcar) + x

console.log("Salário final = ", recebido)
