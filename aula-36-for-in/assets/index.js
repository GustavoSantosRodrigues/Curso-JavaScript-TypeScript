//for in le os indices ou chaves do objeto 


const pessoas = {
    nome: 'Gustavo',
    idade: 20,
    sobrenome: 'Santos'
}

for(let chave  in pessoas){
    console.log(chave, pessoas[chave])
}

// const frutas = ['maca', 'uva', 'banana'];

// for(let i in frutas){
//     console.log(i)
// }

// for(i = 0; i < frutas.length; i++){
//     console.log(frutas[2])
// }