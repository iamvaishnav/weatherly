import React from 'react';
import classes from './backdrop.module.scss';

const backDrop = (props) => {
    return props.show ? <div className={classes.overlay}>{props.children}</div> : null;
};

export default backDrop;
