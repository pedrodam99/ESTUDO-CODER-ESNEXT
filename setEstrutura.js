// Estrutura não indexada e que não aceita repetição
// É apenas um conjunto

const times = new Set()
times.add('Corinthians')
times.add('Vasco').add('Palmeiras').add('Flamengo')
times.add('Fluminense')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Flamengo')
times.has('Flamengo')

const nomes = ['Raquel', 'Lucas', 'Pedro', 'João', 'Pedro']
const nomesSet = new Set(nomes)
console.log(nomesSet)