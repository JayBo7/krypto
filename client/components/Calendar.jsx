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
	    showTimeSelect
	    timeFormat="HH:mm"
	    timeIntervals={1}
	    dateFormat="MMMM d, yyyy h:mm aa"
	    timeCaption="time"/>
	  <DatePicker 
	  	selected={end} 
	  	allowSameDay={true}
	  	onChange={changeEndDate} 
	  	selectsEnd
	  	startDate={start}
	  	endDate={end}
	    showTimeSelect
	    timeFormat="HH:mm"
	    timeIntervals={1}
	    dateFormat="MMMM d, yyyy h:mm aa"
	    timeCaption="time"/>
    </div>
)

export default Calendar;