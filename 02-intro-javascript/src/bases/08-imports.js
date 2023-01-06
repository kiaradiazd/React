// como importar
//automatica
//import { heroes } from "./data/heroes";

//{} como haciendo desestructuracion
//import { heroes } from './data/heroes';

//imp
//import { heroes } from './data/heroes'


//importacion por defecto
//si ponen que uno es as default, ese se sale del {}
import  heroes, { owners } from "../data/heroes";

console.log( owners );

export const getHeroById = (id) => heroes.find( (heroe) => heroe.id === id)
    //() algunos le ponen eso para dejar en claro que es el argumento de la funcion




export const getHeroByOwner = ( owner ) => heroes.filter( heroes => heroes.owner === owner);

