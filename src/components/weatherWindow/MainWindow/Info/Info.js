import React, { useState } from 'react';
import classes from './Info.module.scss';
import timeDateFormatter from '../../../../utility/timeDateFormatter';
// import { WiRain } from 'weather-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCloudShowersHeavy,
    faSun,
    faCloud,
    faSnowflake,
    faSmog,
} from '@fortawesome/free-solid-svg-icons';

const Info = (props) => {
    const localOffset = -new Date().getTimezoneOffset();
    const remoteOffset = props.timezone / 60;
    const tzDiff = (localOffset - remoteOffset) * 60 * 1000;
    let localTime = Date.now();
    let remoteTime = new Date(localTime - tzDiff);
    let timeDateInfo = timeDateFormatter(remoteTime, false).date;

    const [, setTime] = useState(timeDateInfo);

    setInterval(() => {
        localTime = Date.now();
        remoteTime = new Date(localTime - tzDiff);
        timeDateInfo = timeDateFormatter(remoteTime, false).date;
        setTime(timeDateInfo);
    }, 1000);

    let icon;
    switch (props.weatherIcon) {
        case 'rain':
            icon = faCloudShowersHeavy;
            break;
        case 'clear':
            icon = faSun;
            break;
        case 'clouds':
            icon = faCloud;
            break;
        case 'snow':
            icon = faSnowflake;
            break;
        case 'fog':
            icon = faSmog;
            break;
        case 'mist':
            icon = faSmog;
            break;
        case 'haze':
            icon = faSmog;
            break;

        default:
            icon = faSun;
            break;
    }

    return (
        <div className={classes.info}>
            <div className={classes.value}>{props.temp}&deg;</div>
            <div className={classes.details}>
                <div className={classes.location}>{props.city}</div>
                <div className={classes.timeDate}>{timeDateInfo}</div>
            </div>
            <div className={classes.condition}>
                <FontAwesomeIcon icon={icon} color='white' size='3x' className={classes.icon} />
                <h4>{props.condition}</h4>
            </div>
        </div>
    );
};

export default Info;
