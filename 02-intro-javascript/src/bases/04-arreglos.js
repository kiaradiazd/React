
//arreglos en js

//ya no se ocupa asi
//const arreglo = new Array();

const arreglo = [1, 2, 3, 4];
// el push modifica el valor original
//arreglo.push(1)
//arreglo.push(2)
//arreglo.push(3)
//arreglo.push(4)


//... = extrae la informacion
let arreglo2 = [...arreglo, 5]
//funcion calback, funcion que se ejecuta dentro de un metodo
const arreglo3 = arreglo2.map(valor => valor * 2);

console.log( arreglo2 );
console.log( arreglo3 );