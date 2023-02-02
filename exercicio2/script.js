// EXERCICIO 02

const primeiroNumero = Number(prompt("Digite um número"))
const segundoNumero = Number(prompt("Digite um segundo número"))

console.log(primeiroNumero, segundoNumero)

const op1 = primeiroNumero>segundoNumero
console.log(`O primeiro número é maior que o segundo número? ${op1}`)

const op2 = primeiroNumero===segundoNumero
console.log(`O primeiro número é igual ao segundo número? ${op2}`)

const op3 = primeiroNumero/segundoNumero <=0
console.log(`O primeiro número é divisível pelo segundo número? ${op3}`)

const op4 = segundoNumero/primeiroNumero >=0
console.log(`O segundo número é divisível pelo primeiro? ${op4}`)