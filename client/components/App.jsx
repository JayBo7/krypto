import React from 'react';
import axios from 'axios';
import Calendar from './Calendar';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {},
			start: new Date(),
			end: new Date()
		}

		this.getCoinDeskInfo = this.getCoinDeskInfo.bind(this);
		this.handleStartDate = this.handleStartDate.bind(this);
		this.handleEndDate = this.handleEndDate.bind(this);
	}

	componentDidMount() {
		this.getCoinDeskInfo();
	}

	getCoinDeskInfo() {
		axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
			.then(response => response.data)
			.then(data => this.setState({
					data
			}))
			.catch(err => console.error(err));
	}

	handleStartDate(start) {
		this.setState({ start })
	}

	handleEndDate(end) {
		this.setState({ end })
	}

	render() {
		const { data, start, end } = this.state;

		return (
			<div>
				<div>
					<Calendar start={start} end={end} changeStartDate={this.handleStartDate} changeEndDate={this.handleEndDate} />
				</div>
				<div>
					<a> {JSON.stringify(data)} </a>
				</div>
				<div>
					<a className="disclaimer" href="https://www.coindesk.com/price/bitcoin"><b>{data.disclaimer}</b></a>
				</div>
			</div>
		)
	}

}

export default App;