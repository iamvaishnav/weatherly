import React from 'react';
import classes from './Info.module.scss';
// import { WiRain } from 'weather-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';

const info = (props) => (
	<div className={classes.info}>
		<div className={classes.value}>09&deg;</div>
		<div className={classes.details}>
			<div className={classes.location}>London</div>
			<div className={classes.timeDate}>06:09- Monday, 9 Sep '19</div>
		</div>
		<div className={classes.condition}>
			<FontAwesomeIcon
				icon={faCloudShowersHeavy}
				color='white'
				size='3x'
				className={classes.icon}
			/>
			<h4>Rainy</h4>
		</div>
	</div>
);

export default info;
