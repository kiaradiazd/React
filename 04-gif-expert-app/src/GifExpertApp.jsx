import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    const [ categories, setCategories] = useState( [ 'One Punch', 'Dagron Ball' ] );

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
            categories.map( ( category ) => {
                return (
                    <div key={ category }>
                        <h3>{ category }</h3>
                        <li>{ category }</li>
                    </div>
                )
            })
        }
      </ol>
    </>
  )
}

export default GifExpertApp;
