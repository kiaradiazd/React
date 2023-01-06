
const apiKey = 'AibcEcsqGW4V7SVTmliOGDnTNGZbM4m9';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);


/**
 * 
peticion.then( resp => {
    //es un metodo de la rpta, que resuelve lo que viene en el api.
    resp.json().then( data => {
        console.log( data )
    })
})
.catch( console.warn );
*/

//la promesa de fecth llama a la promesa de json 
peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
        
    })
    .catch( console.warn );
