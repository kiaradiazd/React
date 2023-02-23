
import { useCounter, useFecth } from '../hooks';
import { LoadingQuote, Quote } from './';



export const MultipleCustomHooks = () => {
    
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFecth('https://www.breakingbadapi.com/api/quotes/'+{counter});
    const { author, quote } = !!data && data[0];

    // if ( isLoading ) {
    //     return ( 
    //         <h1>cargando...</h1>
    //     )
    // }

    return (
        <>
            <h1>Braking bad Quotes</h1>
            <hr />
            {
                isLoading
                ? <LoadingQuote/>
                : <Quote author={ author } quote={ quote }/>
            }

            <button onClick={() => (1)} className='btn btn-primary' disabled={ isLoading }>
                Next quote
            </button>
        </>
    );
};

