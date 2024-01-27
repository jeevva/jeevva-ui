import { render, screen } from '@testing-library/react';
import Ruby from '..';

describe('Component Test Ruby', () => {
	it('Component Render Ruby', () => {
		render(<Ruby>Ruby</Ruby>);
		const text = screen.getByText('Ruby');
		expect(text).toBeInTheDocument();
	});
});
