import { render, screen } from '@testing-library/react';
import Tbody from '..';

describe('Component Test Tbody', () => {
	it('Component Render Tbody', () => {
		render(
			<Tbody>
				<tr>
					<th>Header</th>
				</tr>

				<tr>
					<td>Data</td>
				</tr>
			</Tbody>
		);
		const header = screen.getByText('Header');
		const data = screen.getByText('Data');
		expect(header).toBeInTheDocument();
		expect(data).toBeInTheDocument();
	});
});
