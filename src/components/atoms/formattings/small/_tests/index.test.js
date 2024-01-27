import { render, screen } from '@testing-library/react';
import Small from '..';

describe('Component Test Small', () => {
	it('Component Render Small', () => {
		render(<Small>Small</Small>);
		const text = screen.getByText('Small');
		expect(text).toBeInTheDocument();
	});
});
