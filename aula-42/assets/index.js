/*
ESCREVA UMA FUNCAO CHAMADA ePaisagem
que recebe dois argumentos, largura e altura
de uma img (number)
retorne true se a img estiver no modo paisagem
*/
const ePaisagem = (largura, altura) => largura >= altura;
console.log('melhor solucao');
console.log(ePaisagem(1080, 1902));

function ePaisagems (largura, altura){
    return largura > altura ? true : false;
}
console.log('primeira solução');
console.log(ePaisagems(1920, 1080));


