import { render, screen } from '@testing-library/react';
import Tfoot from '..';

describe('Component Test Tfoot', () => {
	it('Component Render Tfoot', () => {
		render(
			<Tfoot>
				<tr>
					<th>Header</th>
				</tr>

				<tr>
					<td>Data</td>
				</tr>
			</Tfoot>
		);
		const header = screen.getByText('Header');
		const data = screen.getByText('Data');
		expect(header).toBeInTheDocument();
		expect(data).toBeInTheDocument();
	});
});
