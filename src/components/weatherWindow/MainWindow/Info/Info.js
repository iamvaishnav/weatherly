import React, { useState } from 'react';
import classes from './Info.module.scss';
import timeDateFormatter from '../../../../utility/timeDateFormatter';
// import { WiRain } from 'weather-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';

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
    return (
        <div className={classes.info}>
            <div className={classes.value}>{props.temp}&deg;</div>
            <div className={classes.details}>
                <div className={classes.location}>{props.city}</div>
                <div className={classes.timeDate}>{timeDateInfo}</div>
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

export default Info;
