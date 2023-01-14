import { usContext } from "../../src/base-pruebas/06-deses-obj"


describe('Pruebas en 06-deses', () => {

    test('usContext debe de retornar un objeto', () => {

        const clave = 'Hojaio';

        const edad = '30';
  
        const contex = usContext({ clave, edad })
        
        expect( contex ).toStrictEqual({

            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });

    });

});

