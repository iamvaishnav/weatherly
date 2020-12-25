import React from 'react';
import classes from './Items.module.scss';

const items = (props) => (
	<div className={classes.items}>
		<div className={classes.name}>{props.query}</div>
		<div className={classes.value}>{props.value}</div>
	</div>
);

export default items;
