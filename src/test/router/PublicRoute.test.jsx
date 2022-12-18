import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../auth';
import { PublicRoute } from '../../router/PublicRoute';

describe('Pruebas en <PublicRoute />', () => {
  
    test('Debe de mostrar el children si no está auntenticado  ', () => {
        
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Pública')).toBeTruthy();
      
    });

    test('Debe de navegar si está autenticado  ', () => {
        
        const contextValue = {
            logged: true,
            user: {
                id: '1',
                name: 'Matias'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta Pública</h1>
                            </PublicRoute>
                        }/>
                        <Route path='64' element={<h1>Página 64</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Página 64')).toBeTruthy();
         
    });
    
});
