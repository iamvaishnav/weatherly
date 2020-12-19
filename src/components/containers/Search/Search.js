import React, { Component } from 'react';
import classes from './Search.module.scss';

class Search extends Component {
	render() {
		return (
			<div className={classes.search}>
				<input type='text' placeholder='Search Cities' />
				<div className={classes.icon}>glass</div>
			</div>
		);
	}
}

export default Search;
