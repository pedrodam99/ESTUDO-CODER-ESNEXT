//Arrow Function
const soma = (a, b) =>  a + b
console.log(soma(10, 20))

//Arrow function + this
//sempre apontará pra exports ou module.exports
const lexico1 = () => console.log(this === exports)

//nem mesmo forçando com o bind
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametros default
function log (texto = 'Node') {
    console.log(texto)
}
log()
log('sou um texto')

//operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach((n) => {
     total += n
    })    
    return total 
}
console.log(total(1, 2, 3 ,4 ))

