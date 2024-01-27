import { render, screen } from '@testing-library/react';
import Samp from '..';

describe('Component Test Samp', () => {
	it('Component Render Samp', () => {
		render(<Samp>Samp</Samp>);
		const text = screen.getByText('Samp');
		expect(text).toBeInTheDocument();
	});
});
