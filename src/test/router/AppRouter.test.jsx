import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth';
import { AppRouter } from '../../router/AppRouter';

describe('Pruebas en <AppRouter />', () => {

    test('Debe de mostrar el login si no está auntenticado ', () => {

        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/64']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter>

                    </AppRouter>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText('Login')).toBeTruthy();
      
    });

    test('Debe de mostrar el componente de 64 si esta auntenticado ', () => {

        const contextValue = {
            logged: true,
            user: {
                id: '1',
                name: 'Matias'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter>

                    </AppRouter>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText('Mario')).toBeTruthy();
      
    });
    
});
