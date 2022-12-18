import { Navigate, Routes, Route } from 'react-router-dom';
import { Navbar } from '../../ui';
import { BusquedaPage, PersonajesPage, SmashBros64Page, SmashBrosMeleePage } from '../pages';

export const PersonajesRoutes = () => {

    return (
        <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="64" element={<SmashBros64Page />} />
                <Route path="melee" element={<SmashBrosMeleePage />} />
                <Route path="search" element={<BusquedaPage />} />
                <Route path="personaje/:id" element={<PersonajesPage />} />
                <Route path="/" element={<Navigate to="/64" />} />
            </Routes>
        </div>
        </>
    )
}