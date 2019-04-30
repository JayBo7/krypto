import DatePicker from "react-datepicker";
import style from '../../node_modules/react-datepicker/dist/react-datepicker.css';

const Calendar = ({ start, end, changeStartDate, changeEndDate }) => (
	<div>
	  <DatePicker 
	  	selected={start} 
	  	allowSameDay={true}
	  	onChange={changeStartDate} 
	  	selectsStart
	  	startDate={start}
	  	endDate={end}
	    dateFormat="MMMM d, yyyy"
	    />
	  <DatePicker 
	  	selected={end} 
	  	allowSameDay={true}
	  	onChange={changeEndDate} 
	  	selectsEnd
	  	startDate={start}
	  	endDate={end}
	    dateFormat="MMMM d, yyyy"
	    />
    </div>
)

export default Calendar;