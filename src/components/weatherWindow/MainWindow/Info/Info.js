import React from 'react';
import classes from './Info.module.scss';
import timeDateFormatter from '../../../../utility/timeDateFormatter';
// import { WiRain } from 'weather-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';

const info = (props) => {
    // const localOffset = -new Date().getTimezoneOffset();
    // const remoteOffset = props.timezone / 60;
    // const tzDiff = (localOffset - remoteOffset) * 60 * 1000;
    // const localTime = Date.now();
    // const remoteTime = new Date(localTime - tzDiff);
    // const timeDateInfo = timeDateFormatter(remoteTime).date;
    return (
        <div className={classes.info}>
            <div className={classes.value}>{props.temp}&deg;</div>
            <div className={classes.details}>
                <div className={classes.location}>{props.city}</div>
                {/* <div className={classes.timeDate}>{timeDateInfo}</div> */}
            </div>
            <div className={classes.condition}>
                <FontAwesomeIcon
                    icon={faCloudShowersHeavy}
                    color='white'
                    size='3x'
                    className={classes.icon}
                />
                <h4>{props.condition}</h4>
            </div>
        </div>
    );
};

export default info;
