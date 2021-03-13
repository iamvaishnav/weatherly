import React from 'react';
import classes from './errorPage.module.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../weatherWindow/Logo/Logo';

const errorPage = () => (
    <React.Fragment>
        <div className={classes.logo}>
            <Logo />
        </div>
        <div className={classes.wrapper}>
            <span className={classes.description}>Seems like you aren't on Earth</span>
            <NavLink className={classes.button} to='/'>
                Try Again
            </NavLink>
        </div>
    </React.Fragment>
);

export default errorPage;
