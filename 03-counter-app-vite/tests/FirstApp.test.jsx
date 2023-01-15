import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';



describe('Pruebas en <FirstApp />', () => {

    test('debe de hacer mach con el snapshot', () => {
        
        const title = 'Hola soy Vgeta';
        const { container } = render(<FirstApp title={ title } />)
        
        expect( container ).toMatchSnapshot();

    });

    
    test('debe de mosntrar el titulo en un h1', () => {
        
        const title = 'Hola, soy Goku';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } />);
        
        expect( getByText(title) ).toBeTruthy();


        expect( getByTestId('test-title').innerHTML ).toContain(title)

        
    });

    test('debe de mostrar el sudtitulo enviado por props', () => {
        
        const title = 'Hola, soy Goku';
        const subTitle = 'Soy un sudtitulo';
        const { getAllByText } = render( 
        <FirstApp 
        title={ title }
        subTitle={ subTitle } 
        />);
        
        expect( getAllByText(subTitle).length ).toBe(2);
    });

});