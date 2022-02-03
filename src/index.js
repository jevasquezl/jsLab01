
import './css/componentes.css';
import './styles.css';
import { MiClase } from './classes';
import { crearHtml } from './js/componentes'

const miClase = new MiClase('Julio Eduardo');

let miArreglo = JSON.stringify(miClase);

crearHtml(miClase);

console.log( miClase );
console.log( miArreglo );


// // Eventos
// const miBoton   = document.querySelector('.destroy');
const miTexto   = document.querySelector('.CTexto');
const bsalvar = document.querySelector('#salvar');
const bcargar = document.querySelector('#cargar');


const clases = document.querySelector("body");
//Storage

// localStorage.setItem('mi-key', 'ABC123');

// // setTimeout(()=>{
// //     localStorage.removeItem('mi-key')
// // } , 1500)


// sessionStorage.setItem('mi-key', 'ABC123');


miTexto.addEventListener('keyup', ( Event ) => {

   if ( Event.keyCode === 13 && miTexto.value.length > 0 ) {

        console.log(miTexto.value);

        // crearHtml( '' );
        // miTexto.value = '';
    }
})

// miBoton.addEventListener("click", (event) => {

//     console.log(event);

// });


bsalvar.addEventListener('click' , () =>
    {
        localStorage.setItem('Datos', miArreglo);
    }
);

bcargar.addEventListener('click' , () => {
    // miArreglo = [];
    // if( localStorage.getItem ('Datos'))
    // {
    //     miArreglo = JSON.parse(localStorage.getItem ('Datos'));
    // }    
    const ver = bcargar.classList.contains('bfooter');

    console.log(ver);
});