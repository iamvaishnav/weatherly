import React from 'react';
import classes from './Details.module.scss';
import Items from './Items/Items';

const details = (props) => (
	<div className={classes.container}>
		<h3>Weather Details</h3>
		<div className={classes.details}>
			<Items query='Wind' value={`${props.wind} km/hr`} />
			<Items query='Humidity' value={`${props.humidity} %`} />
			<Items query='Pressure' value={`${props.pressure} hPa`} />
			<Items query='Sunrise' value={`${props.sunrise}`} />
			<Items query='Sunset' value={`${props.sunset}`} />
		</div>
	</div>
);

export default details;
