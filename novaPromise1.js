let p = new Promise(function(resolve){
    resolve(['ana', 'sergio', 'pedro', 'erick'])
})

const primeiroElemento = valor => valor[0]
const primeiraLetra = primeiro => primeiro[0]
const agoraEmMaiuscula = letra => letra.toUpperCase()

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(agoraEmMaiuscula)
    .then(letraMaiuscula => console.log(letraMaiuscula))
