import { personajes } from '../data/personajes';

export const getPersonajeByName = (name = '') => {

    name = name.toLocaleLowerCase().trim();

    if(name.length === 0) return [];

    return personajes.filter(
        pj => pj.nombre.toLowerCase().includes(name)
    );
}