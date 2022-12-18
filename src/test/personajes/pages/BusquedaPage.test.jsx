import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { BusquedaPage } from '../../../personajes/pages/BusquedaPage';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({

    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));

describe('Pruebas en <BusquedaPage />', () => {

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrarse correctamente con valores por defecto ', () => {

        const {container} = render(
            <MemoryRouter>
                <BusquedaPage />
            </MemoryRouter>
        );

        // screen.debug()
        expect(container).toMatchSnapshot();
      
    });

    test('Debe de mostrar a Roy y el input con el valor del queryString ', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=roy']}>
                <BusquedaPage />
            </MemoryRouter>
        );

        const inputValue = screen.getByRole('textbox');

        expect(inputValue.value).toBe('roy');

        const img = screen.getByRole('img');

        expect(img.src).toBe('http://localhost/personajes/melee-roy.png');

        const alertDanger = screen.getByLabelText('alert-danger');

        expect(alertDanger.style.display).toBe('none');
      
    });

    test('Debe de mostrar un error si no encuentra un presonaje (roy123) ', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=roy123']}>
                <BusquedaPage />
            </MemoryRouter>
        );

        const alertDanger = screen.getByLabelText('alert-danger');

        expect(alertDanger.style.display).toBe('');
      
    });

    test('Debe de llamar el navigate a la pantalla nueva ()', () => {

        const inputValue = 'marth';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <BusquedaPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        
        fireEvent.change(input, { target: { name: 'busquedaText', value: inputValue}});

        const form = screen.getByRole('searchForm');

        fireEvent.submit(form);

        expect(mockUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);

        // const searchButton = screen.getByRole('button', {name: 'Buscar'});

        // fireEvent.click(searchButton);

        // expect(mockUseNavigate).toHaveBeenCalledWith('?q=roy');
    
    });
    
});
