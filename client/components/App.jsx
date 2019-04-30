import React from 'react';
import axios from 'axios';
import Calendar from './Calendar';
import Table from './Table';
import Graph from './Graph';
import dateFns from 'date-fns';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			bpi: {},
			disclaimer: '',
			labels: [],
			values: [],
			start: dateFns.subDays(new Date(), 30),
			end: dateFns.subDays(new Date(), 1),
			currency: 'USD',
			xAxis: ''
		}

		this.getCoinDeskInfo = this.getCoinDeskInfo.bind(this);
		this.handleStartDate = this.handleStartDate.bind(this);
		this.handleEndDate = this.handleEndDate.bind(this);
	}

	componentDidMount() {
		this.getCoinDeskInfo();
	}

	getCoinDeskInfo() {
		const { start, end, currency } = this.state;

		axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${dateFns.format(start,'YYYY-MM-DD')}&end=${dateFns.format(end, 'YYYY-MM-DD')}&currency=${currency}`)
			.then(response => response.data)
			.then(data => this.setState({
					bpi: data.bpi,
					labels: Object.keys(data.bpi),
					values: Object.values(data.bpi),
					disclaimer: data.disclaimer,
					xAxis: currency
			}))
			.catch(err => console.error(err));
	}

	handleStartDate(start) {
		this.setState({ start })
	}

	handleEndDate(end) {
		this.setState({ end })
	}

	handleCurrency(event) {
		this.setState({
			currency: event.target.value
		})
	}

	render() {
		const { bpi, disclaimer, labels, values, start, end, currency, xAxis } = this.state;

		return (
			<div>
				<div className="controller">
					<Calendar start={start} end={end} changeStartDate={this.handleStartDate} changeEndDate={this.handleEndDate} />
					<select onChange={() => this.handleCurrency(event)}>
						<option value="USD">USD</option>
						<option value="GBP">GBP</option>
						<option value="EUR">EUR</option>
						<option value="CNY">CNY</option>
					</select>
					<input type="button" value="Go" onClick={() => this.getCoinDeskInfo()} />
				</div>
				<div className="data">
					<div className="Chart">
						<Graph labels={labels} values={values} xAxis={xAxis} />
					</div>
					<div className="Table">
						<Table labels={labels} values={values} currency={currency}/>
					</div>
				</div>
				<div className="disclaimer">
					<a href="https://www.coindesk.com/price/bitcoin"><b>{disclaimer}</b></a>
				</div>
			</div>
		)
	}

}

export default App;
