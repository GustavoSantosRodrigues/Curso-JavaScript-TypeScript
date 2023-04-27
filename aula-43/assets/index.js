/*
Escreva uma função que recebe um numero e
retorne o seguinte
Numero é divisivel por 3 = fizz
Numero é divisivel por 5 = buzz
Numero é divisivel por 3 e 5 = fizzbuzz
Numero nao e divisivel por 3 e 5 = retorna o proprio numero 
Checar se o numero é realmente um numero
Use a função com numero de 0 a 100
*/

function fizzBuzz(numero) {
    if(typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
  
    return numero;
} 


for(let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz())
}