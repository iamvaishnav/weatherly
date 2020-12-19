import React from 'react';
import classes from './Info.module.scss';
import Rain from '../../../../assets/rainy-outline.svg';
import { WiRain } from 'weather-icons-react';

const info = (props) => (
	<div className={classes.info}>
		<div className={classes.value}>09</div>
		<div className={classes.details}>
			<div className={classes.location}>London</div>
			<div className={classes.timeDate}>06:09- Monday, 9 Sep '19</div>
		</div>
		<div className={classes.condition}>
			<WiRain size={70} color='#fff' />
			<h4>Rainy</h4>
		</div>
	</div>
);

export default info;
