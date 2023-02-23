import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../src/components/AddCategory";


describe('Pruebas en <AddCategory />', () => {

    const inputValue = 'Saitama';
  
    test('Debe de cambiar el valor de la caja de texto', () => {
      
        render( <AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');

        //disparar un evento .. mandas a llamar a input .. y quien recibe el evento.. el evento que recibd
        fireEvent.input( input, { target:{ value: inputValue} });
        //con screen.debug puedes ver tu sujeto de pruebas
        //screen.debug();

        //input es un html, pero con value se puede acceder a ello
        expect( input.value ).toBe(inputValue);


    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
      
        // es jest, es decir un mock, simulacion de la funcion.
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target:{ value: inputValue} });
        fireEvent.submit( form );
        screen.debug();

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });
    
    test('No debe de llamar el onNewCategory si el input está vacio', () => {
      
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/>);
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        screen.debug();
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
    });
    

});

