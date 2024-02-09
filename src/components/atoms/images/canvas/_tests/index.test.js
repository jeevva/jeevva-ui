import { render, screen } from '@testing-library/react';

import Canvas from '..';

/*
 * Unit Testing
 * Component Canvas
 * Render Component
 * Detect Text or childreen props
 */

describe('Component Test Get Text', () => {
	it('Component Canvas', () => {
		render(<Canvas>Hello world</Canvas>);
		const text = screen.getByText('Hello world');
		expect(text).toBeInTheDocument();
	});
	it('Component Canvas render test hello codding', () => {
		render(<Canvas>Hello Coding</Canvas>);
		const text = screen.getByText('Hello world');
		expect(text).toBeInTheDocument();
	});
});
