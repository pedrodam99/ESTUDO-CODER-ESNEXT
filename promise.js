// a promise é uma promessa, e é utilizado quando precisa-se ter um processamento assincrono
// os caminhos naturais da promise é ser resolvida ou ela ser rejeitada

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

//utilizamos o then para obter o resultado da promisse
//a promisse aceita apenas um parametro
//para tratarmos do erro usamos o reject / catch
falarDepoisDe(2, 'Que legal')
    .then(frase => frase.concat('!!!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))