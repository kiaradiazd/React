import { getHeroById } from "./bases/08-imports";

const getHeroByIdAsync = ( id ) => {


    return new Promise( (resolve, reject) => {
    
        setTimeout( () => {
        
            const heroe = getHeroById( id );
        
            heroe ? resolve( heroe ) : reject( heroe);
        
        
            reject (heroe);
        }, 2000)
    
    });
}
getHeroByIdAsync(4)
//cuando se reciba el primer argumento, se manda a consola.
    .then( console.log )
    .catch( console.warn )
    //de una forma mas extensa es así
    /**
     * .then( heroe => console.log('Heroe', heroe ))
    .catch( err => console.warn( err ))
     */
