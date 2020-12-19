import React, { Component } from 'react';
import classes from './Layout.module.scss';
import MainWindow from '../../weatherWindow/MainWindow/MainWindow';
import MoreDetails from '../../weatherWindow/moreDetails/MoreDetails';

class Layout extends Component {
	render() {
		return (
			<section className={classes.layout}>
				<MainWindow />
				<MoreDetails />
			</section>
		);
	}
}

export default Layout;
