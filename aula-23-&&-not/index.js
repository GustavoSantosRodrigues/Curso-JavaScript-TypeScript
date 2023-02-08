/*  

&& todas as expressoes precisa serem verdadeiras para retornar true
|| true || precisa so de uma expressao verdadeira para retornar vdde 

*/


const corUsuario = null;
const corPadrao =  corUsuario || 'preto';

console.log(corPadrao)


// no caso de cima, se o usuario escolhesse uma cor iria soliticar a cor verde caso fosse null iria pegar a cor padrao preto
// so precisa que um valor seja verdadeiro

// console.log(null && 'maria') 

// function falaOi() {
//     return 'oi';
// }

// let vaiExecutar;

// console.log(vaiExecutar && falaOi()); 

