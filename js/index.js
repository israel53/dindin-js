let header = document.getElementsByTagName('header');  
// console.log(header[0]);

header[0].style.backgroundColor = '#2E948A';

let linkCursos = document.querySelector('#menu_opcoes nav a: nth-child(1)');
console.log(linkCursos);
linkCursos.setAttribute('haref', 'cursos.html');

document.querySelector(".titulo.depoimento h3").innerHTML = "O que falam sobre nós";
console.log(document.querySelector(".titulo.depoimento h3"));

document.querySelectorAll(".titulo h3")[1].innerHTML = "Mais conteúdo pra você";
console.log(blog);

const lista = document.querySelectorAll('.titulo'); 
for (let i = 0; i < lista.length; i++) { lista[i].style.textTransform = 'uppercase'; 
}

linkPost = document.querySelector('#todos_posts');
console.log(link);

linkCursos.setAttribute('haref', 'blog.html');
 
let section = document.querySelector('#investimentos_poupando_independencia');