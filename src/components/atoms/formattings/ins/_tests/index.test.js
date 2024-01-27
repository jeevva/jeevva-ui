import { render, screen } from '@testing-library/react';
import Ins from '..';

describe('Component Test Ins', () => {
	it('Component Render Ins', () => {
		render(<Ins>Ins</Ins>);
		const text = screen.getByText('Ins');
		expect(text).toBeInTheDocument();
	});
});
