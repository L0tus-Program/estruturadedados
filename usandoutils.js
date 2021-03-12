// load module
const prompt = require("./utils/prompt")
//usando
console.clear()
var name = prompt ("Qual seu nome? ", "string") //determino o tipo de dado , string pode ficar em branco
var age = prompt ("Qual sua idade? ", "number")
console.log("Seu nome é ", name)
console.log("Você tem " ,age ,"anos")

