import React from 'react';
import classes from './Details.module.scss';
import Items from './Items/Items';

const details = (props) => (
	<div className={classes.container}>
		<h3>Weather Details</h3>
		<div className={classes.details}>
			<Items query='Wind' value='8 km/hr' />
			<Items query='Humidity' value='62%' />
			<Items query='Pressure' value='1.2 hPa' />
			<Items query='Sunrise' value='6.36AM' />
			<Items query='Sunset' value='6.27PM' />
		</div>
	</div>
);

export default details;
