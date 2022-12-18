import { personajes } from '../data/personajes';

export const getPersonajeById = (id) => {

    return personajes.find(pj => pj.id === id);
}