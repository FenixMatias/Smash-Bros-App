import { Link } from 'react-router-dom';

export const PersonajesCard = ({
    id,
    nombre,
    compania,
    saga
}) => {
    const personajesImage = `/docs/assets/personajes/${id}.png`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={personajesImage} className="card-img" style={{width: 150, height: 250}} alt={nombre} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">{saga}</p>
                            <p className="card-text">
                                <small className="text-muted">{compania}</small>
                            </p>
                            <Link to={`/personaje/${id}`}>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}