//sao indexadas  012345678
//[] serve para buscar a letra, charat(), tbm funciona
//indexof serve para aonde esta o indice da sua letra
//match(/[a-z]/g) faz uma busca das letras minusculas
//replace serve para mudar uma determinada coisa console.log(umaString.replace('r', 'p')); 
// para colocar p em todas as letras r console.log(umaString.replace(/r/g, '%')); 'FLAG G'
//lenght serve para contar os caracteres
//slice serve para fatiar por exemplo escrever so rato console.log(umaString.slice(2, 6)); colocando negativo ele pega os caractere do final
let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.replace(/\s/g, '')); //assim tira os espacos e toUpperCase fica maiscula