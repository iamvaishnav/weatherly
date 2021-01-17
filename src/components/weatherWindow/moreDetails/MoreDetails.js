import React, { useState, useEffect } from 'react';
import classes from './MoreDetails.module.scss';
import Search from '../../containers/Search/Search';
import Details from './WeatherDetails/Details';

const MoreDetails = (props) => {
	const [isDesktop, setDesktop] = useState(window.innerWidth > 778);
	const [weatherData, setweatherData] = useState(undefined);

	const getSearchData = (data) => {
		setweatherData(data);
		props.pullWData(data);
	};

	const updateMedia = () => {
		setDesktop(window.innerWidth > 778);
	};

	useEffect(() => {
		console.log(weatherData);
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});

	return (
		<div className={classes.more}>
			{isDesktop ? <Search className={classes.search} searchData={getSearchData} /> : null}
			<Details
				wind={props.wind}
				humidity={props.humidity}
				pressure={props.pressure}
				sunset={props.sunset}
				sunrise={props.sunrise}
			/>
		</div>
	);
};

export default MoreDetails;
