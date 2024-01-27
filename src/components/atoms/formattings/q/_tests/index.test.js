import { render, screen } from '@testing-library/react';
import Q from '..';

describe('Component Test Q', () => {
	it('Component Render Q', () => {
		render(<Q>Q</Q>);
		const text = screen.getByText('Q');
		expect(text).toBeInTheDocument();
	});
});
