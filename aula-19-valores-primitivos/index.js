/*
    primitivos (imutaveis) -string, number, boolean, undefined
    null (bigint, symbol) valores copiados

    let numero = 10;
    numero = 20;

    referencias (mutavel) array, object , function - passados por referencias
   const a = {
    nome: Luiz,
    idade: 20
   }

   const b = {...a}
   a.nome = 'joao'
   console.log(a); --> {nome:joao, idade:20}
   console.log(b); --> {nome:luiz, idade:20}
*/