
//Desestruración
//asignacion desesctruturante
const persona = {
    nombre: 'tony',
    edad:45,
    clave:'Iroman'
}

// el {} es para extraer
//si ya tienes un var { nombre:nombre2 }
const { nombre, edad, clave } = persona;

console.log(nombre, edad, clave)

//otro uso de desestruracion en el argumento
const usContext = ({ clave, nombre, edad, rango = 'Cap:'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.455,
            lng: -233.435
        }
    }
    //console.log( nombre, edad, rango )
}

const { nombreClave, anios, latlng:{ lat, lng} } = usContext( persona )

console.log(nombreClave, anios );
console.log( lat, lng );