//operador ..., rest (junta) / spread(separa)
//Rest serve para juntar todos os parametros passados em uma única estrutura

//rest usa-se como parametro da função
function podio(primeiro, segundo, terceiro, ...foraDoPodio) {
    console.log(
        `   
            COLOCAÇÃO
        1° - ${primeiro}
        2° - ${segundo}
        3° - ${terceiro}
        
        Obrigado por participarem: ${foraDoPodio}
        `
    )
}
podio('Corinthians', 'Palmeiras', 'Santos', 'Flamengo', 'São Paulo')


//Spread com objeto
const funcionario = {nome: 'Maria', salario: 1999.99}
const clone = {ativo: true, ...funcionario}

console.log(funcionario)
console.log(clone)

//Spread no array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA]
console.log(grupoFinal)