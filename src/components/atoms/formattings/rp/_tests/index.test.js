import { render, screen } from '@testing-library/react';
import Rp from '..';

describe('Component Test Rp', () => {
	it('Component Render Rp', () => {
		render(<Rp>Rp</Rp>);
		const text = screen.getByText('Rp');
		expect(text).toBeInTheDocument();
	});
});
