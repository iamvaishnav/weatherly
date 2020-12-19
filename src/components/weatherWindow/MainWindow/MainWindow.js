import React from 'react';
import classes from './MainWindow.module.scss';
import Logo from '../../containers/Logo/Logo';
import Info from './Info/Info';

const mainWindow = (props) => (
	<div className={classes.main}>
		<Logo />
		<Info />
	</div>
);

export default mainWindow;
