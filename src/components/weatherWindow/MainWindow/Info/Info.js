import React from 'react';
import classes from './Info.module.scss';
// import { WiRain } from 'weather-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';

const info = (props) => {
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const dateObj = new Date();
	const month = monthNames[dateObj.getMonth()];
	const dayNum = dateObj.getDate();
	const day = dayName[dateObj.getDay()];
	const year = String(dateObj.getFullYear()).substr(2, 2);
	const output = `${dateObj.toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	})} ${day}, ${dayNum} ${month} '${year}`;

	return (
		<div className={classes.info}>
			<div className={classes.value}>{props.temp}&deg;</div>
			<div className={classes.details}>
				<div className={classes.location}>{props.city}</div>
				{/* <div className={classes.timeDate}>{output}</div> */}
			</div>
			<div className={classes.condition}>
				{/* <FontAwesomeIcon
					icon={faCloudShowersHeavy}
					color='white'
					size='3x'
					className={classes.icon}
				/> */}
				<h4>{props.condition}</h4>
			</div>
		</div>
	);
};

export default info;
