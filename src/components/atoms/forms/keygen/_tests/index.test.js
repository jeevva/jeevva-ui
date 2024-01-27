import { render, screen } from '@testing-library/react';
import Keygen from '..';

describe('Component Test Keygen', () => {
	it('Component Render Keygen', () => {
		render(<Keygen>Keygen</Keygen>);
		const text = screen.getByText('Keygen');
		expect(text).toBeInTheDocument();
	});
});
