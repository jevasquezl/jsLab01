// import { MiClase } from '../classes';
import '../styles.css';
import webpacklogo from '../assets/webpack-sprite.png';
// import { IgnorePlugin } from 'webpack';
// Referencias en el HTML
// const main   = document.querySelector('.main');


const miList = document.querySelector('.milist');

export const crearHtml = ( dato ) => {

    const htmlInsert = `
    <li class="completed" data-id="${ dato.id }">
        <div class="view">
            <label>${ dato.nombre }</label>            
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlInsert;

    //Para no insertar el div sino el li le decimos que insert el firstElementChild

    miList.append( div.firstElementChild );
    

    const img = document.createElement('img');
    const mifoot = document.querySelector('.info');
    img.src = webpacklogo;
    img.className = "img";
    mifoot.append(img);

    return div.firstElementChild;
}



miList.addEventListener("click", ( event ) => {
    //label,  button.destroy,  

const nombre     = event.target.localName; // input, label, button
const elemento   = event.target.parentElement.parentElement;
const todoId     = elemento.getAttribute('data-id');

console.log(event);
console.log(nombre);
console.log(todoId);

// if (  nombre.includes('input') ){ // click en el check 
//     todoList.marcarCompletado( todoId );
//     todoElemento.classList.toggle('completed');

// } else if( nombreElemento.includes('button') ) { // hay que borrar el todo

//     todoList.eliminarTodo( todoId );
//     divTodoList.removeChild( todoElemento );

// }

})
