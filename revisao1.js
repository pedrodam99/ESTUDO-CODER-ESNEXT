//let e const
//let tem escopo de bloco
{
    let a = 1
    {
        let a = 10
        console.log('dentro', a)
    }
    console.log('fora', a)
}

//template string
const produto = 'iPad'
console.log(`${produto} é caro`)

//destructuring

//de string
const [l, e, ...tras] = "Coder"
console.log(l, e, tras)
//de array
const [x, y] = [1, 2 , 3 , 5]
console.log(x, y)

//de objeto
const {idade: i, nome} = {nome: 'Ana', idade: 19}
console.log(i, nome)

