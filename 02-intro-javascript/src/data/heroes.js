//antes del const poner export
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
//exportar algo mas
const owners = ['DC', 'Marvel'];


//exportar por defecto
//export default heroes;

export {
    //si quieres importar uno por defecto y así uno no está con {} se pone
    //as default
    heroes as default,
    owners
}