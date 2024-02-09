import { render, screen } from '@testing-library/react';
import Audio from '..';

describe('Component Test Audio', () => {
	it('Component Render Audio', () => {
		render(
			<Audio
				alt='Test audio'
				src='https://platinumlist.net/guide/wp-content/uploads/2023/03/AUDIO-worlds-of-adventure-1536x864.webp'
			/>
		);

		const audio = screen.getByAltText('Test audio');

		expect(audio).toBeInTheDocument();
		expect(audio).toHaveAttribute(
			'src',
			'https://platinumlist.net/guide/wp-content/uploads/2023/03/AUDIO-worlds-of-adventure-1536x864.webp'
		);
	});
});
