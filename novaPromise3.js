function gerarNumerosEntre(min, max){
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(function(resolve){
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio) 
    })
}

gerarNumerosEntre(30, 10)
    .then(console.log)