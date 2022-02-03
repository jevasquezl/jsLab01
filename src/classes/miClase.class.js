
export class MiClase {

    constructor( nombre ) {

        this.nombre     = nombre;
        this.id         = new Date().getTime(); // 12836871263
        this.completado = false;
        this.creado     = new Date();

    }

    imprimirClase() {
        console.log(`${ this.nombre } - ${ this.id }`);
    }

    cargarLocalStorage(){

            // if ( localStorage.getItem('llave')){
            //     this.miobjeto = JSON.parse(localStorage.getItem('llave');)
            // }
            // else{
            //     this.miobjeto = [];
            // }

            this.miObjeto = ( localStorage.getItem('llave')) ? localStorage.getItem('llave') : [] ;

    }

    guardarLocalStorage(){

        localStorage.setItem('llave', JSON.stringify( this.MiClase ));
    }


    // eliminarLocalStorage(){


    // }




}