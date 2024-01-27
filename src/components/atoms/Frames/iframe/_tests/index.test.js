import { render, screen } from '@testing-library/react';
import Iframe from '..';

describe('Component Test Iframe', () => {
	it('Component Render Iframe', () => {
		render(
			<Iframe
				title='Test iframe'
				src='http://google.com'
			/>
		);

		const iframe = screen.getByTitle('Test iframe');

		expect(iframe).toBeInTheDocument();
		expect(iframe).toHaveAttribute('src', 'http://google.com');
	});
});
