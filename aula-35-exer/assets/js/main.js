const elementos = [
    {tag: 'p' , texto: 'frase1'},
    {tag: 'div',  texto: 'frase2'},
    {tag: 'section', texto: 'frase3'},
    {tag: 'footer', texto: 'frase4'}
]; 

const container = document.querySelector('.container');

const p = document.createElement('p'); 
const div = document.createElement('div');

for(i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada)
    console.log(tag)
}

container.appendChild(div);