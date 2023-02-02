// EXERCICIO 3 

//Parte 1

/*const operacaoA = 5 > 20 && 5 < 2
console.log(`A operação a) é: ${operacaoA}`)

const operacaoB = 5 === 5 || 5 === "5"
console.log(`A operação b) é: ${operacaoB}`)

const operacaoC = !(20 > 50)
console.log(`A operação c) é: ${operacaoC}`)

const operacaoD = !(20 > 50 || 50 > 60)
console.log(`A operação d) é: ${operacaoD}`)*/


//Parte 2

/* 
- Fulano de Silva
- CPF: 000.000.000-00 
- nasceu em 10/02/1990
- Rua dos bobos nº 0 
- possui 2 filhos
- habilitação? Sim
- cargo de vendedor 
- salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês
- entrou na empresa em 2019.*/

let salario = 2000.00
let auxilioCreche = 45.50
let comissao = 0.1
const vendaJaneiro = 5784.50
const vendaFevereiro = 3418.41
const vendaMarco = 4124.10
const vendaAbril = 1874.00
const vendaMaio = 7000.00
const vendaJunho = 9450.00
let INSS = 0.05

//1)
const calculo1 = salario + (2 * auxilioCreche)
console.log(`Qual o salario de Fulano mais auxilio creche? É de: ${calculo1}`)

//2)
const calculo2 = vendaJaneiro * comissao
console.log(`Fulano vai receber em Janeiro de comissão é de: ${calculo2}`)

//3)
const calculo3 = salario + (2 * auxilioCreche) + vendaJaneiro * comissao
const resultadoCalculo3 = calculo3 * INSS
console.log(`Valor de Janeiro que vai ser descontado pelo INSS é: ${resultadoCalculo3}`)

//4)

const mesJaneiro = salario + (2 * auxilioCreche) + vendaJaneiro * comissao
const INSSJaneiro = mesJaneiro * INSS
const resultadoJaneiro = mesJaneiro - INSSJaneiro
console.log(`Salário mês de Janeiro: ${resultadoJaneiro}`)

const mesFevereiro = salario + (2 * auxilioCreche) + vendaFevereiro * comissao
const INSSFevereiro = mesFevereiro * INSS
const resultadoFevereiro = mesFevereiro - INSSFevereiro
console.log(`Salário mês de Fevereiro: ${resultadoFevereiro}`)

const mesMarco = salario + (2 * auxilioCreche) + vendaMarco * comissao
const INSSMarco = mesMarco * INSS
const resultadoMarco = mesMarco - INSSMarco
console.log(`Salário mês de Março: ${resultadoMarco}`)

const mesAbril = salario + (2 * auxilioCreche) + vendaAbril * comissao
const INSSAbril = mesAbril * INSS
const resultadoAbril = mesAbril - INSSAbril
console.log(`Salário mês de Abril: ${resultadoAbril}`)

const mesMaio = salario + (2 * auxilioCreche) + vendaMaio * comissao
const INSSMaio = mesMaio * INSS
const resultadoMaio = mesMaio - INSSMaio
console.log(`Salário mês de Maio: ${resultadoMaio}`)

const mesJunho = salario + (2 * auxilioCreche) + vendaJunho * comissao
const INSSJunho = mesJunho * INSS
const resultadoJunho = mesJunho - INSSJunho
console.log(`Salário mês de Maio: ${resultadoJunho}`)


const mediaSalario = resultadoJaneiro + resultadoFevereiro + resultadoMarco + resultadoAbril + resultadoJunho
const mediaResultadoSalario = mediaSalario / 6
console.log(`A média salarial em 6 meses é: ${mediaResultadoSalario}`)






