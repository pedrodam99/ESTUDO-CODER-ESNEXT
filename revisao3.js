// ES8: Object.values & Object.entries
const obj = {a: 1, b: 2, c: 3, d: 4}

const valores = Object.values(obj)
console.log(valores)

//Mostra as entradas, transformando em uma matriz
const entradas = Object.entries(obj)
console.log(entradas)

//Melhorias nas notações literais de objeto
const nome = 'Clara'
const pessoa = {
    nome,
    ola() {
       return `Olá ${nome}`
    }
}
console.log(pessoa.nome, pessoa.ola())

//Classe
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au Au'
    }
}

console.log(new Cachorro().falar())