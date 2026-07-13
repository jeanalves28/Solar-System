import SolarSystem from '../components/SolarSystem';
import { render, screen } from '@testing-library/react';

describe('4 - Renderize o componente `Title` dentro do componente `SolarSystem`', () => {
	it('Será validado se o texto "Planetas" é renderizado usando o componente `Title` dentro do componente `SolarSystem`', () => {
		render(<SolarSystem />);
		const title = screen.getByRole('heading', { level: 2 });
		expect(title).toBeInTheDocument();
		expect(title).toHaveTextContent(/Planetas/i);
	});
});
