import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function CounterApp({ value }) {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        setCounter( counter + 1 );
        //setCounter( (c) => c + 1 )
    }

    const handlead = () => setCounter( counter - 1 );
    

    const handle = () => setCounter( value);

  return (
    <>
    <h1>CounterApp</h1>
    <h2>{ counter }</h2>
    <button onClick={ handleAdd }> +1 </button>
    <button onClick={ handlead }> -1 </button>
    <button aria-label="btn-reset" onClick={ handle }> reset </button>
    </>
  )
}

CounterApp.prototype = {
    value : PropTypes.number.isRequired
}