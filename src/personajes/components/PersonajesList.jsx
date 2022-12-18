import { useMemo } from 'react';
import { getPersonajesByPublisher } from '../helpers';
import { PersonajesCard } from './';

export const PersonajesList = ({serie}) => {

    const personajes = useMemo(() => getPersonajesByPublisher(serie), [serie  ]);

    return (
       
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {personajes.map((pj) => (
                <PersonajesCard 
                    key={pj.id}
                    {...pj}/>
            ))}
        </div>
    )
}