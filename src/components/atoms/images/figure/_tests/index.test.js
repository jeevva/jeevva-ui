import { render, screen } from '@testing-library/react';

import Figure from '..';

/*
 * Unit Testing
 * Component Figure
 * Render Component
 * Detect Text or childreen props
 */

describe('Component Test Get Text', () => {
	it('Component Figure', () => {
		render(<Figure>Hello world</Figure>);
		const text = screen.getByText('Hello world');
		expect(text).toBeInTheDocument();
	});
	it('Component Figure render test hello codding', () => {
		render(<Figure>Hello Coding</Figure>);
		const text = screen.getByText('Hello world');
		expect(text).toBeInTheDocument();
	});
});
