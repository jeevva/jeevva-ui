import { render, screen } from '@testing-library/react';

import Map from '..';

/*
 * Unit Testing
 * Component Map
 * Render Component
 * Detect Text or childreen props
 */

describe('Component Test Get Text', () => {
	it('Component Map', () => {
		render(<Map>Hello world</Map>);
		const text = screen.getByText('Hello world');
		expect(text).toBeInTheDocument();
	});
	it('Component Map render test hello codding', () => {
		render(<Map>Hello Coding</Map>);
		const text = screen.getByText('Hello world');
		expect(text).toBeInTheDocument();
	});
});
