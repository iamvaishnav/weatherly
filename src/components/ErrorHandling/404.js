import React from 'react';
import classes from './errorPage.module.scss';
import { NavLink } from 'react-router-dom';

const errorPage = () => (
    <div className={classes.wrapper}>
        <span className={classes.description}>Seems like you aren't on Earth</span>
        <NavLink className={classes.button} to='/'>
            Try Again
        </NavLink>
    </div>
);

export default errorPage;
