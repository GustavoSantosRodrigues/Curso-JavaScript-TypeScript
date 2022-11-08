// IEE 754-2008 precisao js 

let number1 = 0.7; //number
let number2 = 0.1; //number
number1 = ((number1 * 100) + (number2 * 100)) /100;  //0.8
number1 = ((number1 * 100) + (number2 * 100)) /100;  //0.9
number1 = ((number1 * 100) + (number2 * 100)) /100;  //1.0
console.log(Number.isInteger(number1));

// number1 += number2;
// number1 += number2;

// number1 = parseFloat(number1.toFixed(2)); // esquema facil para deixar 1.0 para inteiro
// console.log(Number.isInteger(number1));
// let temp = number1 * 'ola';
// console.log(Number.isNaN(temp)); sua conta deu errado true
// console.log(Number.isInteger(number1));
// console.log(number1.toFixed(2)); serve para arrendondar de 15.3434 para 15.34    
// console.log(number1.toString(2)); transforma em binario
// number1 = number1.toString();
// console.log(number1.toString() + number2);