/*Animação do texto que aparece digitando*/

const titulo = document.querySelector('h1');
typeWrite(titulo);

function typeWrite(elemento){
const textoArray = elemento.innerHTML.split('');
elemento.innerHTML = '';
textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 80 * i)

});

}