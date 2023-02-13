//ano , mes, dia, hora, minutos, segundos, ms 

// const data = new Date('2019-04-20 20:15:59.100');
// console.log('Dia', data.getDate()); //dia
// console.log('Mes', data.getMonth() + 1); //mes comeca do zero janeiro 0 dezembro 11
// console.log('Ano', data.getFullYear()); //ano
// console.log('Hora', data.getHours()); //hora
// console.log('Min', data.getMinutes()); //minutos
// console.log('Seg', data.getSeconds()); //segundos
// console.log('Ms', data.getMilliseconds()); //ms
// console.log('Dia Semana', data.getDay() + 1); //0 domingo, 6 - sabado
// console.log(data.toString())


//essa funcao coloca zero a esquerda quando for menor que 10 
function zeroAEsquerda (num){
    return num >=10 ? num : `0${num}`;
}

//essa funcao formata a data 
function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil =  formataData(data);
console.log(dataBrasil);