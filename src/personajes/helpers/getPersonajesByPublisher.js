import { personajes } from '../data/personajes';

export const getPersonajesByPublisher = (serie) => {

    const validSerie = ['Super Smash Bros', 'Super Smash Bros Melee'];

    if (!validSerie.includes(serie)){

        throw new Error(`${serie} no Existe`);
    }

    return personajes.filter(pj => pj.serie === serie);
}