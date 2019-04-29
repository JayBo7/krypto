const TableEntry = ({ date, value }) => (
	<div className="TableEntry">
		<a className="Entry Date">{date}</a> 
		<a className="Entry Value">{value.toFixed(2)}</a>
	</div>
)

export default TableEntry;
