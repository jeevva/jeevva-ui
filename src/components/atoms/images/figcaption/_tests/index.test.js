import { render, screen } from '@testing-library/react';

import Figcaption from '..';

/*
 * Unit Testing
 * Component Figcaption
 * Render Component
 * Detect Text or childreen props
 */

describe('Component Test Get Text', () => {
	it('Component Figcaption', () => {
		render(<Figcaption>Hello world</Figcaption>);
		const text = screen.getByText('Hello world');
		expect(text).toBeInTheDocument();
	});
	it('Component Figcaption render test hello codding', () => {
		render(<Figcaption>Hello Coding</Figcaption>);
		const text = screen.getByText('Hello world');
		expect(text).toBeInTheDocument();
	});
});
