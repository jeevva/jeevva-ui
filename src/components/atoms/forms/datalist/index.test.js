import { render, screen } from '@testing-library/react';

import Datalist from '.';

/*
 * Unit Testing
 * Component Datalist
 * Render Component
 * Detect Text or childreen props
 */

describe('Component Test Get Text', () => {
	it('Component Datalist', () => {
		render(<Datalist>Hello world</Datalist>);
		const text = screen.getByText('Hello world');
		expect(text).toBeInTheDocument();
	});
});
