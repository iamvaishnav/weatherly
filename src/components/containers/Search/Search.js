import React, { Component } from 'react';
import classes from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Search extends Component {
	state = {
		city: '',
	};

	handleLocationChange = (event) => {
		const city = event.target.value;
		this.setState({
			city: city,
		});
	};

	handleGetWeather = (e) => {
		if (e.key === 'Enter' || e.type === 'click') {
			// this.getWeatherData();
			this.props.getCity(this.state.city);
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
