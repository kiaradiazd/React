

//Funciones en JS

//no es recomendable hacer estas funciones
//function saludar( nombre ) {
//    return `Hola, ${ nombre}`;}

// mejor uns const y le asignas un funcion
const saludar = function( nombre ) {
    return `Hola, ${ nombre}`;
}
    
//así ya no se le puede asignas otro valor que cambie la funcion
//ejmplo saludar=20


//funcion flecha, la mejor
const saludar2 = ( nombre ) => `Hola, ${ nombre }`;

//sin recibir parametros
// el hola mundo se pone sin () pq es un primitivo facil de leer
const saludar3 = () => `Hola Mundo`;


console.log( saludar('Chayanne'));
console.log( saludar2('Chayanne'));
console.log( saludar3());


//para decirle a JS que va a retornar un obj ({})
const getUser = () =>({
        uid: 'aksdl',
        username:'elchamaquin'
    });

console.log( getUser() );


//prueba
const getUsuario = ( nombre ) => ({
    uid: 'afgfs',
    username: nombre
})

const usuarioActivo = getUsuario('Luis');

console.log(usuarioActivo);