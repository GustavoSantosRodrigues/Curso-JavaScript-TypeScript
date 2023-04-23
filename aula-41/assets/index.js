//Escreva uma funcao que receba dois numeros e receba o maior deles

// melhor solucao 
const max = (x, y) => x > y ? x : y;
console.log('MELHOR SOLUCAO')
console.log(max(40, 20))

// primeira solucao 

function max1(x, y){
     if(x > y){
        return x;
     }else{
        return y;
     }
};
console.log('#PRIMEIRA SOLUCAO#')
console.log(max1(100, 200))

// segunda solucao 

function max2(x, y){
    if(x > y){
        return x;
    }
    return y;
}
console.log('###SEGUNDA SOLUCAO###')
console.log(max2(300, 400))
