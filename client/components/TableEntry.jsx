
const TableEntry = ({ date, value, currency }) => {

	const symbol = {
		"USD": "$",
		"GBP": "£",
		"EUR": "€",
		"CNY": "¥"
	}

	return (
		<tr>
			<td>{date}</td> 
			<td>{symbol[currency] + value.toFixed(2)}</td>
		</tr>
	)
}

export default TableEntry;
