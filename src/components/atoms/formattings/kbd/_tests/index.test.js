import { render, screen } from '@testing-library/react';
import Kbd from '..';

describe('Component Test Kbd', () => {
	it('Component Render Kbd', () => {
		render(<Kbd>Kbd</Kbd>);
		const text = screen.getByText('Kbd');
		expect(text).toBeInTheDocument();
	});
});
