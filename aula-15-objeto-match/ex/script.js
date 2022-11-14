const numero = Number(prompt('digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('text');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p> Raiz quadrada: ${Math.sqrt(numero)}. </p>`;
texto.innerHTML += `<p>${numero} esse é inteiro ${Number.isInteger(numero)} </p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)} </p>`
texto.innerHTML += `<p> arredona para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p> arredona para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p> com duas casas decimais: ${numero.toFixed(2)}</p>`
