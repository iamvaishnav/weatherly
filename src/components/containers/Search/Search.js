import React, { Component } from 'react';
import classes from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from '../../../axios';
import axiosCurrent from 'axios';

const apiKey = '79a3b91460dd7597763284d7409af41d';

class Search extends Component {
	state = {
		city: '',
		data: null,
		error: null,
	};

	handleLocationChange = (event) => {
		const city = event.target.value;
		this.setState({
			city: city,
		});
	};

	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevState.city !== this.state.city) {
	// 		const city = this.state.city;
	// 		axios
	// 			.get(`weather?q=${city}&appid=${apiKey}`)
	// 			.then((resolve) => {
	// 				console.log(resolve.data);
	// 			})
	// 			.catch((err) => {
	// 				console.log(err);
	// 			});
	// 	}
	// }

	componentDidMount() {
		const success = (position) => {
			console.log('working');
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;

			axiosCurrent
				.get(
					`https://us1.locationiq.com/v1/reverse.php?key=pk.41e6de89209e586ea317bbdac4b262fa&lat=${latitude}&lon=${longitude}&format=json`
				)
				.then((resolve) => {
					if (resolve.data.address.hasOwnProperty('city')) {
						this.setState(
							{
								city: resolve.data.address.city,
							},
							() => {
								this.getWeatherData();
								this.setState({
									city: '',
								});
							}
						);
					} else {
						this.setState(
							{
								city: resolve.data.address.county,
							},
							() => {
								this.getWeatherData();
								this.setState({
									city: '',
								});
							}
						);
					}
				})
				.catch((err) => console.log(err));
		};

		const error = () => {
			console.log('Something went wrong');
		};

		navigator.geolocation.getCurrentPosition(success, error, { timeout: 10000 });
	}

	getWeatherData() {
		const city = this.state.city;
		axios
			.get(`weather?q=${city}&appid=${apiKey}&units=metric`)
			.then((resolve) => {
				const weatherData = resolve.data;
				this.setState(
					{
						data: weatherData,
					},
					() => {
						this.props.searchData(this.state.data);
					}
				);
			})
			.catch((err) => {
				this.setState({
					error: err,
				});
				console.log(err);
			});
	}

	handleGetWeather = (e) => {
		if (e.key === 'Enter' || e.type === 'click') {
			this.getWeatherData();
			// console.log(this.state);
			this.setState({
				city: '',
			});
		}
	};

	render() {
		return (
			<div className={classes.search}>
				<input
					type='text'
					placeholder='Search Cities'
					value={this.state.city}
					onChange={this.handleLocationChange}
					onKeyPress={this.handleGetWeather}
				/>
				<div className={classes.icon}>
					<FontAwesomeIcon
						icon={faSearch}
						color='#eee'
						className={classes.iconFont}
						onClick={this.handleGetWeather}
					/>
				</div>
			</div>
		);
	}
}

export default Search;
