// (condicao) ? 'valor verdadeira' : 'valor falso'

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >=1000 ? 'usuario vip' : 'usuario normal';

const corUsuario = 'azul';
const corPadrao = corUsuario || 'preto';
console.log(nivelUsuario, corPadrao);




// if(pontuacaoUsuario >=1000){
//     console.log("vip")
// }else{
//     console.log('normal')
// }
// fazendo com if else normal