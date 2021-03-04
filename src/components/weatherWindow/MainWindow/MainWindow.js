import React, { useEffect, useState } from 'react';
import classes from './MainWindow.module.scss';
import Logo from '../../containers/Logo/Logo';
import Info from './Info/Info';
import Search from '../../containers/Search/Search';

const MainWindow = (props) => {
    const [isDesktop, setDesktop] = useState(window.innerWidth <= 778);

    const updateMedia = () => {
        setDesktop(window.innerWidth <= 778);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    });
    return (
        <div className={classes.main}>
            <div className={classes.navBar}>
                <Logo />
                {isDesktop ? (
                    <div className={classes.search}>
                        {' '}
                        <Search getCity={props.pullCity} />
                    </div>
                ) : null}
            </div>

            {/* {!props.show ? (
                <Info
                    condition={props.condition}
                    temp={props.temp}
                    city={props.city}
                    timezone={props.timezone}
                    weatherIcon={props.weatherIcon}
                />
            ) : null} */}
            <Info
                condition={props.condition}
                temp={props.temp}
                city={props.city}
                timezone={props.timezone}
                weatherIcon={props.weatherIcon}
                show={props.show}
            />
        </div>
    );
};

export default MainWindow;
