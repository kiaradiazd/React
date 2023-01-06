//variables y constantes

const nombre = 'Kiara';
let apellido = 'Diaz';

//si tengo planes de cambiar el valor lo dejo como let, sino como const
let valorDado = 5;
console.log( `${nombre} ${apellido} el numero es: ${valorDado}`)
//let crea variables de scot, se pueden volver a crear en funciones locales sin mutar el original

if ( true ) {
    const nombre = 'Peter'
    let valorDado = 6;
    console.log(nombre, valorDado)
}
