import React, { Component } from 'react';
import classes from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Search extends Component {
	render() {
		return (
			<div className={classes.search}>
				<input type='text' placeholder='Search Cities' />
				<div className={classes.icon}>
					<FontAwesomeIcon icon={faSearch} color='#eee' className={classes.iconFont} />
				</div>
			</div>
		);
	}
}

export default Search;
