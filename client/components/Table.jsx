import TableEntry from './TableEntry';

const Table = ({ labels, values }) => (
	<div>
		{labels.map((date, index) => <TableEntry date={date} value={values[index]} />)}
	</div>
)

export default Table;
