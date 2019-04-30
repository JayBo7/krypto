import TableEntry from './TableEntry';

const Table = ({ labels, values, currency }) => (
		<table>
			<thead>
				<tr>
					<th>Date</th> 
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				{labels.map((date, index) => <TableEntry key={index} date={labels[labels.length - index - 1]} value={values[labels.length - index - 1]} currency={currency} />)}
			</tbody>
		</table>
)

export default Table;
