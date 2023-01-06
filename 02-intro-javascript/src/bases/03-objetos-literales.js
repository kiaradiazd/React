

const persona = {
    nombre: 'Chayanne',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'Mexico',
        zip: 12.3663,
        lat: 25.2355,
        lng: 64.3456
    }
};

console.table( persona );

//al Hacer esto mutas el obj original porque tiene el mismo espacio de memoria.
const persona2 = persona;
persona2.nombre = 'Peter';


console.log(persona2)