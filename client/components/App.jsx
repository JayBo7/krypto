import React from 'react';
import axios from 'axios';
import Calendar from './Calendar';
import Table from './Table';
import dateFns from 'date-fns';
import {Line} from 'react-chartjs-2';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			bpi: {},
			disclaimer: '',
			labels: [],
			values: [],
			start: dateFns.subDays(new Date(), 10),
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

		const myChart = {
			type: 'line',
			labels: labels,
      datasets: [
		    {
		      label: 'bitcoin value',
		      fill: false,
		      lineTension: 0.1,
		      backgroundColor: 'rgba(75,192,192,0.4)',
		      borderColor: 'rgba(75,192,192,1)',
		      borderCapStyle: 'butt',
		      borderDash: [],
		      borderDashOffset: 0.0,
		      borderJoinStyle: 'miter',
		      pointBorderColor: 'rgba(75,192,192,1)',
		      pointBackgroundColor: '#fff',
		      pointBorderWidth: 1,
		      pointHoverRadius: 5,
		      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
		      pointHoverBorderColor: 'rgba(220,220,220,1)',
		      pointHoverBorderWidth: 2,
		      pointRadius: 1,
		      pointHitRadius: 10,
		      data: values
		    }
		  ]
		}


		return (
			<div>
				<div>
					<Calendar start={start} end={end} changeStartDate={this.handleStartDate} changeEndDate={this.handleEndDate} />
					<select onChange={() => this.handleCurrency(event)}>
						<option value="USD">USD</option>
						<option value="GBP">GBP</option>
						<option value="EUR">EUR</option>
						<option value="CNY">CNY</option>
					</select>
					<input type="button" onClick={() => this.getCoinDeskInfo()} />
				</div>
				<div>
					<Line data={myChart} options= {{
				  	scales: {
				  		yAxes: [{
				  			scaleLabel: {
				  				display: true,
				  				labelString: 'Dates'
				  			}
				  		}],
				  		xAxes: [{
				  			scaleLabel: {
					  			display: true,
					  			labelString: xAxis
					  		}
				  		}]
				  	}
				  }}
			  />
				</div>
				<div>
					<Table labels={labels} values={values} />
				</div>
				<div>
					<a className="disclaimer" href="https://www.coindesk.com/price/bitcoin"><b>{disclaimer}</b></a>
				</div>
			</div>
		)
	}

}

export default App;