function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número Repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegasena(qtdNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        if (tentativas > 100) {
            throw 'Melhor deixar quieto!'
        } else {
            return gerarMegasena(qtdNumeros, tentativas + 1)
        }
    }
}

gerarMegasena(16)
    .then(console.log)
    .catch(console.log)