import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un heroe por ID', () => {

        const id = 100;
        const hero = getHeroeById( id );
        console.log( hero );

        //cuando espera un valor false/ undefined o false
        expect( hero ).toBeFalsy();

    });


    test('getHeroesByOwner debe de retornar 3 heroes de DC', () => {

        const owner = 'DC';
        const heroDc = getHeroesByOwner( owner );

        expect( heroDc ).toEqual( getHeroesByOwner( 'DC' ));
        expect( heroDc ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
        expect( heroDc.length ).toBe( 3 );
    });


    test('getHeroesByOwner debe de retornar 2 heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroMarvel = getHeroesByOwner( owner );
        console.log( heroMarvel )

        expect( heroMarvel ).toEqual( getHeroesByOwner( 'Marvel' ));
        expect( heroMarvel ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));

    });

});