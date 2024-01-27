import { render, screen } from '@testing-library/react';
import S from '..';

describe('Component Test S', () => {
	it('Component Render S', () => {
		render(<S>S</S>);
		const text = screen.getByText('S');
		expect(text).toBeInTheDocument();
	});
});
