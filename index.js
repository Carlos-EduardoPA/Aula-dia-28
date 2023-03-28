// let msg = 'Olá Mundo'

// function carlos(msg) {
//     //ESCOPO
//     console.log(msg)
// }
// carlos(msg)
// function soma(a, b){
//     let somar = a + b
//     return somar
// }
// let resultado = soma(5, 5)
// console.log(resultado/9)
// function minhaFuncao(){
//     alert('você clicou no botão')
// }
// let minhaFuncao = function() {
//     console.log('Olá Mundo')
// }

// let minhaFuncao2 = (frase) => {
//     return frase
// }
// ARRAY
// const array = ['Elemento 1', 2, true, {nome: 'Fulano de Tal'}]

// const array2 = new array ['Elemento 1', 2, true,{nome:'Fulano de Tal'}]
// const nomes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(nomes.length)
// const nomes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(nomes)
// const numeros = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10]
// adiciona um elemento no final do array
// numeros.push(50)

// numeros.pop()

// numeros.unshift(10)
// numeros.shift()

//console.log(numeros)
// const numeros = [1, 2, 3, 4, 5]
//  const numeros2 = [6, 7, 8, 9, 10]

//  const novoArray = numeros.concat(numeros2)

// const arrayCortado = novoArray.slice(0, 5)
// console.log(arrayCortado)

// const encontrarNoArray = novoArray.indexOf(6)
// const encontrarNoArray = novoArray.findIndex(
//     (numero) => {
//         return numero == 5
//     }
// )

// console.log(encontrarNoArray)

// novoArray.forEach((elemento, indice) => {
//     console.log(`valor - ${elemento} / Índice - ${indice}`)
// })
// MAP
//  const exemploMap = novoArray.map((item) => {
//      return item == 5
//  })
//console.log(exemploMap)
//  const usuarios = [
//      {
//          nome: 'Carlos',
//          idade: 17,
//          prifissao: 'desenvolvimento Front-end',
//          salario: 5000
//      },
//      {
//          nome: 'João',
//          idade: 25,
//          profissao: 'Desenvolvedor Front-end',
//          salario: 7000
//      },
//      {
//         nome: 'Eduardo',
//         idade:50,
//         profissao: 'Desenvolvedor Front-end',
//         salario: 9000
         
//      }
// ]
// const filtrarUsuarios = usuarios.filter((usuarios) => { 
//     let filtragem = usuarios.salario <= 9000
//     return(filtragem)
// })
// //console.log(filtrarUsuarios)
// // REDUCE
// const somarSalario = usuarios.reduce((total, usuarios) => {
//     return total + usuarios.salario
// }, 0)
// console.log(somarSalario.toLocaleString('pt-br',{
//     style: 'currency',
//     currency: 'BRL'
// }))
// const pessoas = {
//     //chave: valor
//     nome: 'Maria',
//     idade: 35,
//     hoobies: ['Assistir Séries', 'Passear com o doguinho', 'Jogar LOL', 'Estuda'],
//     caracteristicas: {
//         cabelo: 'cacheado',
//         altura: 1.88,
//         peso: 56.7,
//         sexo: 'feminino'
//     },
//     esta_viva: true
// }

// DESESTRUTURAÇÃO DE OBJETOS E ARRAYS
const pessoa = {
    //chave: valor
    nome: 'Maria',
    idade: 35,
    hoobies: ['Assistir Séries', 'Passear com o doguinho', 'Jogar LOL', 'Estuda'],
    caracteristicas: {
        cabelo: 'cacheado',
        altura: 1.88,
        peso: 56.7,
        sexo: 'feminino'
    },
    esta_viva: true
} 
let { nome: nomePessoa } = pessoa
nomePessoa = 'Carlos'

console.log(nomePessoa)