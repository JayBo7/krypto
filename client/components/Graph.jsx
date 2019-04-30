import {Line} from 'react-chartjs-2';

const Graph = ({ labels, values, xAxis }) => {

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
		<Line data={myChart} options= {{
	  	scales: {
	  		yAxes: [{
	  			scaleLabel: {
	  				display: true,
	  				labelString: xAxis
	  			}
	  		}],
	  		xAxes: [{
	  			scaleLabel: {
		  			display: true,
		  			labelString: 'Dates'
		  		}
	  		}]
	  	}
	  }}
  />
	)
}

export default Graph;
