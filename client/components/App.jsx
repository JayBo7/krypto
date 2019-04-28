import React from 'react';
import axios from 'axios';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {}
		}

		this.getCoinDeskInfo = this.getCoinDeskInfo.bind(this);
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

	render() {
		const { data } = this.state;

		return (
			<div>
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