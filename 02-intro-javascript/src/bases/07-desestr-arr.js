//Desestructuracion de arreglos

const personajes = ['Goku','Vegetta', 'Trunks'];


// [] desestructuracion de arreglos
// espacio con coma, hace que se ignore
const [ , ,p3 ] = personajes;

console.log( p3 );

//const retornaArreglo = () 

const usState = ( nombre ) => {
    return [ nombre, ()=>{ console.log('Hola Mundo') } ];
}

const [ nombre, seNombre] = usState( 'Matias' );

console.log( nombre, seNombre)