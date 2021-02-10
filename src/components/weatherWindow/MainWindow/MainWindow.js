import React, { useEffect, useState } from 'react';
import classes from './MainWindow.module.scss';
import Logo from '../../containers/Logo/Logo';
import Info from './Info/Info';
import Search from '../../containers/Search/Search';

const MainWindow = (props) => {
	const [isDesktop, setDesktop] = useState(window.innerWidth <= 778);
	// const [weatherData, setweatherData] = useState(undefined);

	const updateMedia = () => {
		setDesktop(window.innerWidth <= 778);
	};

	// const getSearchData = (data) => {
	// 	setweatherData(data);
	// 	props.pullWData(data);
	// };

	useEffect(() => {
		// console.log(weatherData);
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});
	return (
		<div className={classes.main}>
			<div className={classes.navBar}>
				<Logo />
				{isDesktop ? (
					<div className={classes.search}>
						{' '}
						<Search getCity={props.pullCity} />
					</div>
				) : null}
			</div>

			<Info condition='---' temp='--' city='---' />
		</div>
	);
};

export default MainWindow;
