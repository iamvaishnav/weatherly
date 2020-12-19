import React from 'react';
import classes from './MoreDetails.module.scss';
import Search from '../../containers/Search/Search';

const moreDetails = (props) => (
	<div className={classes.more}>
		<Search />
	</div>
);

export default moreDetails;
