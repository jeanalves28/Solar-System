import SolarSystem from '../components/SolarSystem';
import { render, screen } from '@testing-library/react';

describe('3 - Crie um componente chamado `Title`', () => {
	it('Será validado se o componente `<SolarSystem />` contém uma tag `h2`', () => {
		render(<SolarSystem />);
		const headline = screen.getByRole('heading', { level: 2 });

		expect(headline).toBeInTheDocument();
	});

	it('Será validado se o componente `<SolarSystem />` contém uma tag `h2` com o texto "planetas"', () => {
		render(<SolarSystem />);
		const headline = screen.getByRole('heading', { level: 2 });

		expect(headline).toHaveTextContent(/planetas/i);
	});
});
