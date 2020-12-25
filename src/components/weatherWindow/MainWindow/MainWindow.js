import React, { useEffect, useState } from 'react';
import classes from './MainWindow.module.scss';
import Logo from '../../containers/Logo/Logo';
import Info from './Info/Info';
import Search from '../../containers/Search/Search';

const MainWindow = (props) => {
	const [isDesktop, setDesktop] = useState(window.innerWidth <= 778);

	const updateMedia = () => {
		setDesktop(window.innerWidth <= 778);
	};

	useEffect(() => {
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
						<Search />
					</div>
				) : null}
			</div>
			<Info />
		</div>
	);
};

export default MainWindow;
