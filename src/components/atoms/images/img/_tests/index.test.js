import { render, screen } from '@testing-library/react';
import Img from '..';

describe('Component Test Img', () => {
	it('Component Render Img', () => {
		render(
			<Img
				alt='Test img'
				src='https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1536x864.webp'
			/>
		);

		const img = screen.getByAltText('Test img');

		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute(
			'src',
			'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1536x864.webp'
		);
	});
});
