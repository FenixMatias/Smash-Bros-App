import { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getPersonajeById } from '../helpers';

export const PersonajesPage = () => {

    const { id } = useParams();

    const personaje = useMemo( () => getPersonajeById(id), [id]); 

    const navigate = useNavigate();

    const onReturn = () => {

        navigate(-1);
    }

    if(!personaje){

        return <Navigate to="/64" />;
    }

    return (
        <div className="row mt-5 animate__animated animate__fadeInLeft">
            <div className="col-4">
                <img src={`/personajes/${id}.png`} 
                    alt={personaje.nombre} 
                    className="img-thumbnail"/>
            </div>
            <div className="col-8">
                <h3>{personaje.nombre}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Compañia:</b> {personaje.compania}</li>
                    <li className="list-group-item"><b>Saga:</b> {personaje.saga}</li>
                    <li className="list-group-item"><b>Serie:</b> {personaje.serie}</li>
                    <li className="list-group-item"><b>Primera Aparición:</b> {personaje.primera_aparicion}</li>
                </ul>
                <button 
                    className="btn btn-info mt-3"
                    onClick={onReturn}>
                    Volver
                </button>
            </div>
        </div>
        
    )
}