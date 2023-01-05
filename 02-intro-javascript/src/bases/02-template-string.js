

const nombre = 'Kiara';
const apellido = 'Diaz'

//tambien te coge el salto de linea si saltas la linea
const nombreCompleto = `${ nombre } ${ apellido } `;

console.log ( nombreCompleto );

function getSaludo() {
    return 'Hola Mundo' + nombre;
}

console.log( `Este en un texto: ${ getSaludo( nombre ) }`)