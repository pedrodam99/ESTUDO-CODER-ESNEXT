function gerarNumerosEntre(min, max, tempo){
    if (min > max) [max, min] = [min, max]
    return new Promise(function(resolve){
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio) 
        }, tempo)
    })
}

function gerarVariosNum () {
    return Promise.all([
        gerarNumerosEntre(1, 50, 1000),
        gerarNumerosEntre(1, 50, 2000),
        gerarNumerosEntre(1, 50, 500),
        gerarNumerosEntre(1, 50, 1500),
        gerarNumerosEntre(1, 50, 1000),
        gerarNumerosEntre(1, 50, 3000),

    ])
}

gerarVariosNum()
    .then(numeros => console.log(numeros))