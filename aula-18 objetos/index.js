
function criaPessoa (nome, sobrenome, idade) {
    return { 
        nome, 
        sobrenome, 
        idade
    }
}

const pessoa1 = criaPessoa('Gustavo', 'Santos' , 20);
const pessoa2 = criaPessoa('Joana', 'Rodrigues' , 30);
const pessoa3 = criaPessoa('Leonardo', 'Oliveira' , 40);

console.log(pessoa1, pessoa2, pessoa3);