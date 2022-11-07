const nome = 'Gustavo';
const sobrenome = 'Santos';
const idade = 20;
const peso = 70;
const alturaEmM = 1.65;
let indiceMassaCorporal //peso / pela (altura * altura) 
let anoNascimento; 

indiceMassaCorporal =  peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal} e nasceu no ano de ${anoNascimento} ` );


// console.log(nome, sobrenome , 'tem', idade , 'anos, pesa ', peso , 'kg tem', alturaEmM , 'de altura e seu IMC é de ', indiceMassaCorporal , 'e nasceu no ano de' , anoNascimento  );



