import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";


describe('Pruebas es <GifGrid />', () => {
  
    test('debe de mostrar el loading inicialmente', () => {
      
        render( <GifGrid category={ category }/> );
        expect( screen.getByText( 'cargando...' ) );
        expect( screen.getByText( category ) );
    });
    
});
