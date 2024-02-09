import { render, screen } from '@testing-library/react';

import Area from '..';

/*
 * Unit Testing
 * Component Area
 * Render Component
 * Detect Text or childreen props
 */

describe('Component Test Get Text', () => {
	it('Component Area', () => {
		render(<Area>Hello world</Area>);
		const text = screen.getByText('Hello world');
		expect(text).toBeInTheDocument();
	});
	it('Component Area render test hello codding', () => {
		render(<Area>Hello Coding</Area>);
		const text = screen.getByText('Hello world');
		expect(text).toBeInTheDocument();
	});
});
