import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {

    test('getHeroByIdAsync debe de retornar un héroe', ( done ) => {

        const id = 1;
        getHeroeByIdAsync( id )
        .then( hero => {

            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
            done();
        });
    });



    test('getHeroByIdAsync debe de obtener un error si heroe no existe', ( done ) => {

        const id = 100;
        getHeroeByIdAsync( id )
        .then( hero => {
                //Si hay, tira un false
                expect ( hero ).toBeFalsy();
                done();
        })
        .catch( error => {

            expect( error ).toBe(`No se pudo encontrar el héroe ${id}`)
            done();
        });
    });


});