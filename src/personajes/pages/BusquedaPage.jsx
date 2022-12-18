import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { PersonajesCard } from '../components';
import { getPersonajeByName } from '../helpers';

export const BusquedaPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const personajes = getPersonajeByName(q);
    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && personajes.length === 0;

    const { busquedaText, onInputChange} = useForm({
        busquedaText: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();

        // if(busquedaText.trim().length <= 1) return;

        navigate(`?q=${busquedaText.toLowerCase()}`)
    }

    return (
        <>
            <h1>Busqueda de Personajes</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Busqueda</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit} role="searchForm">
                        <input 
                            type="text"
                            placeholder="Buscar Personaje"
                            className="form-control"
                            name="busquedaText"
                            autoComplete="off"
                            value={busquedaText}
                            onChange={onInputChange} 
                        />
                    <button className="btn btn-primary mt-2">
                        Buscar
                    </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultado</h4>
                    <hr />
                    {/* {
                        (q === '')
                        ? <div className="alert alert-primary">Personaje Encontrados</div>
                        : (personajes.length === 0) && <div className="alert alert-danger">No hay Personajes Encontrados con <b>{q}</b></div>
                    } */}
                    <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none'}}>Buscar un Personaje</div>
                    <div aria-label="alert-danger" className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError ? '' : 'none'}}>No hay Personajes Encontrados con <b>{q}</b></div>
                    
                    {
                        personajes.map(pj => (
                            <PersonajesCard key={pj.id}{...pj}/>
                        ))
                    }
                </div>
            </div>
            
        </>
    )
}