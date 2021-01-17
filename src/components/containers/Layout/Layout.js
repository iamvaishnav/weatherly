import React, { Component } from 'react';
import classes from './Layout.module.scss';
import MainWindow from '../../weatherWindow/MainWindow/MainWindow';
import MoreDetails from '../../weatherWindow/moreDetails/MoreDetails';

class Layout extends Component {
	state = {
		weatherData: null,
	};

	getSearchData = (data) => {
		this.setState({
			weatherData: data,
		});
	};
	render() {
		if (this.state.weatherData != null) {
			const rise = new Date(this.state.weatherData.sys.sunrise * 1000);
			const set = new Date(this.state.weatherData.sys.sunset * 1000);
			const localOffset = -new Date().getTimezoneOffset();
			const remoteOffset = this.state.weatherData.timezone / 60;

			console.log(rise);
		}
		return (
			<section className={classes.layout}>
				<MainWindow pullWData={this.getSearchData} />
				{this.state.weatherData != null ? (
					<MoreDetails
						wind={this.state.weatherData.wind.speed}
						humidity={this.state.weatherData.main.humidity}
						pressure={this.state.weatherData.main.pressure}
						sunset={this.state.weatherData.sys.sunset}
						sunrise={this.state.weatherData.sys.sunrise}
						pullWData={this.getSearchData}
					/>
				) : (
					<MoreDetails wind='--' humidity='--' pressure='--' sunset='--' sunrise='--' />
				)}
			</section>
		);
	}
}

export default Layout;
