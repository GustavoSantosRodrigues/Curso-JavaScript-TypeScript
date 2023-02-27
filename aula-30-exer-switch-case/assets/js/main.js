const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();


function getDiaSemanaTexto(diaSemana){
    // let diaSemanaTexto;

    // switch (diaSemana) {
    // case 0:
    //     diaSemanaTexto = 'domingo'
    //     return diaSemanaTexto;
    // case 1:
    //     diaSemanaTexto = 'segunda'
    //     return diaSemanaTexto;
    // case 2:
    //     diaSemanaTexto = 'terça'
    //     return diaSemanaTexto;
    // case 3:
    //     diaSemanaTexto = 'quarta'
    //     return diaSemanaTexto;
    // case 4:
    //     diaSemanaTexto = 'quinta'
    //     return diaSemanaTexto;
    // case 5:
    //     diaSemanaTexto = 'sexta'
    //     return diaSemanaTexto;
    // case 6:
    //     diaSemanaTexto = 'sabado'
    //     return diaSemanaTexto;
    // default:
    //     diaSemanaTexto = ''
    //     return diaSemanaTexto;
    // }

    const diasSemana = ['domingo','segunda','terca', 'quarta', 'quinta', 'sexta', 'sabado']
    return diasSemana[diaSemana]
}

function getNomeMes(NomeMes){
    // let nomeMesTexto;

    // switch (NomeMes) {
    // case 0:
    //     nomeMesTexto = 'janeiro'
    //     return nomeMesTexto;
    // case 1:
    //     nomeMesTexto = 'fevereiro'
    //     return nomeMesTexto;
    // case 2:
    //     nomeMesTexto = 'marco'
    //     return nomeMesTexto;
    // case 3:
    //     nomeMesTexto = 'abril'
    //     return nomeMesTexto;
    // case 4:
    //     nomeMesTexto = 'maio'
    //     return nomeMesTexto;
    // case 5:
    //     nomeMesTexto = 'junho'
    //     return nomeMesTexto;
    // case 6:
    //     nomeMesTexto = 'julho'
    //     return nomeMesTexto;
    // case 7:
    //     nomeMesTexto = 'agosto'
    //     return nomeMesTexto;
    // case 8:
    //     nomeMesTexto = 'setembro'
    //     return nomeMesTexto;
    // case 9:
    //     nomeMesTexto = 'outubro'
    //     return nomeMesTexto;
    // case 10:
    //     nomeMesTexto = 'novembro'
    //     return nomeMesTexto;
    // case 11:
    //     nomeMesTexto = 'dezembro'
    //     return nomeMesTexto;
    // default:
    //     nomeMesTexto = ''
    //     return nomeMesTexto;
    // }

    const meses = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[NomeMes];  
}

function zeroAEsquerda (num){
    return num >=10 ? num : `0${num}`;
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const NomeMes = getNomeMes(numeroMes);

    return (`${nomeDia}, ${numeroMes} de ${NomeMes}` + 
    ` de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    )
}


h1.innerHTML = criaData(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString('pt-br',{dateStyle: 'full', });