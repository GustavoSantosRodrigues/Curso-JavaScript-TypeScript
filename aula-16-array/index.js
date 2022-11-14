const alunos = ['joao', 'luiz', 'gustavo'];

alunos.push('maria')
alunos.push('eduardo')



// console.log(typeof(alunos)) alunos é object
// console.log(alunos instanceof Array) sim alunos é um array

// console.log(alunos.slice(0, 4)); fatiando os indices

// const removido = alunos.pop(); tambem da para colocar gustavo em uma variavel
// console.log(removido);

// alunos.shift(); remove do comeco
// alunos.pop(); remove do fim 

// alunos.unshift('luiza') adiciona no comeco do array 
// alunos.unshift('fabio')

// alunos.push('maria'); adiciona no fim do array funcao
// alunos.push('luciana');
// alunos.push('lucimara');

// alunos [alunos.length] = 'maria' adiciona no fim do array
// alunos [alunos.length] = 'luciana'
// alunos [alunos.length] = 'lucimara'

// alunos [3] = 'leonardo' adicionando
// alunos [0] = 'maria' altera joao para maria 
// console.log(alunos[2]); pegando indice 2 