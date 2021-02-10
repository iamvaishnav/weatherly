import React, { Component } from 'react';
import classes from './Layout.module.scss';
import MainWindow from '../../weatherWindow/MainWindow/MainWindow';
import MoreDetails from '../../weatherWindow/moreDetails/MoreDetails';

class Layout extends Component {
	state = {
		city: null,
		weatherData: null,
	};

	getCityName = (name) => {
		this.setState(
			{
				city: name,
			},
			() => console.log(this.state.city)
		);
	};
	render() {
		// let sunRise = '-- AM';
		// let sunSet = '-- PM';
		// if (this.state.weatherData != null) {
		// 	const rise = new Date(this.state.weatherData.sys.sunrise * 1000);
		// 	const set = new Date(this.state.weatherData.sys.sunset * 1000);
		// 	const localOffset = -new Date().getTimezoneOffset();
		// 	const remoteOffset = this.state.weatherData.timezone / 60;
		// 	const localOffsetHour = (localOffset - (localOffset % 60)) / 60;
		// 	const remoteOffsetHour = (remoteOffset - (remoteOffset % 60)) / 60;
		// 	const sunRiseHour = rise.getHours() - (localOffsetHour - remoteOffsetHour);
		// 	const sunRiseMinute = rise.getMinutes() - ((localOffset % 60) - (remoteOffset % 60));

		// 	if (set.getHours() > 12 && set.getHours < 24) {
		// 		let sunSetHour = set.getHours() - 12;
		// 	}
		// const sunSetHour = Math.abs(set.getHours() - (localOffsetHour - remoteOffsetHour) - 12);
		// const sunSetMinute = Math.abs(
		// 	set.getMinutes() - ((localOffset % 60) - (remoteOffset % 60))
		// );
		// sunRise = `${sunRiseHour}:${sunRiseMinute} AM`;
		// sunSet = `${sunSetHour}:${sunSetMinute} PM`;
		// console.log(set);
		// }
		return (
			<section className={classes.layout}>
				<MainWindow pullCity={this.getCityName} />

				<MoreDetails
					// wind={this.state.weatherData.wind.speed}
					// humidity={this.state.weatherData.main.humidity}
					// pressure={this.state.weatherData.main.pressure}
					// sunset={sunSet}
					// sunrise={sunRise}
					pullCity={this.getCityName}
				/>
				{/* ) : (
					<MoreDetails
						wind='--'
						humidity='--'
						pressure='--'
						// sunset={sunSet}
						// sunrise={sunRise}
					/>
				)} */}
			</section>
		);
	}
}

export default Layout;
