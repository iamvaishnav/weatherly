import React, { useState, useEffect } from 'react';
import classes from './MoreDetails.module.scss';
import Search from '../../containers/Search/Search';
import Details from './WeatherDetails/Details';

const MoreDetails = (props) => {
	const [isDesktop, setDesktop] = useState(window.innerWidth > 778);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 778);
	};

	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});
	return (
		<div className={classes.more}>
			{isDesktop ? <Search /> : null}
			<Details />
		</div>
	);
};

export default MoreDetails;
