import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [ categories, setCategories] = useState( [ 'One Punch' ] );

    const onAddCategory = ( newCategory ) => {

        //valide que no sea igual a los valores que ya estan
        if( categories.includes( newCategory )) return;
        //como añadir valor a un array y si quieres agregar al inicio poner valorant antes
        setCategories([ newCategory, ...categories ]);
        //otra manera
        //setCategories( cat => [...cat, 'Valorant' ] );
    };


  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={ onAddCategory }/>
      <ol>
        {
            categories.map( ( category ) => (
                    <GifGrid key={ category } category={ category }/>
            ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp;
