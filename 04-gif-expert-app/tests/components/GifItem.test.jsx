import { render, screen } from "@testing-library/react"
import GifItem from "../../src/components/GifItem"

describe('pruebas es <GifItem />', () => {

    const title = 'UdemyReact';
    const url = 'https://www.udemy.com/course/react-cero-experto/learn/lecture/32021266#questions';

    test('Debe de hacer match con el snapshot', () => {


        const { container } = render( <GifItem title={ title } url={ url }/>);
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar la imagen con el url y el alt indicado', () => {
      
        render( <GifItem title={ title } url={ url }/> );
        screen.debug();

        expect( screen.getByRole('img').alt).toBe( title );
        expect( screen.getByRole('img').src).toBe( url )

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('Debe de mostrar el titulo en el componente', () => {
      
        render( <GifItem title={ title } url={ url }/> );
        expect( screen.getByText( title ) ).toBeTruthy(); 
    });
    
    
});