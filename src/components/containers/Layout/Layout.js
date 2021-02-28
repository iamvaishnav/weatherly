import React, { Component } from 'react';
import classes from './Layout.module.scss';
import MainWindow from '../../weatherWindow/MainWindow/MainWindow';
import MoreDetails from '../../weatherWindow/moreDetails/MoreDetails';
import timeDateFormatter from '../../../utility/timeDateFormatter';
import axios from '../../../axios';
import axiosCurrent from 'axios';

const apiKey = '79a3b91460dd7597763284d7409af41d';

class Layout extends Component {
    state = {
        city: null,
        weatherData: null,
        error: null,
    };

    getCityName = (name) => {
        this.setState(
            {
                city: name,
            },
            () => this.getWeatherData()
        );
    };

    getWeatherData() {
        const city = this.state.city;
        axios
            .get(`weather?q=${city}&appid=${apiKey}&units=metric`)
            .then((resolve) => {
                const weatherData = resolve.data;
                this.setState(
                    {
                        weatherData: weatherData,
                    },
                    () => console.log(this.state.weatherData)
                );
            })
            .catch((err) => {
                this.setState({
                    error: err,
                });
                console.log(err);
            });
    }

    componentDidMount() {
        const success = (position) => {
            console.log('working');
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            axiosCurrent
                .get(
                    `https://us1.locationiq.com/v1/reverse.php?key=pk.41e6de89209e586ea317bbdac4b262fa&lat=${latitude}&lon=${longitude}&format=json`
                )
                .then((resolve) => {
                    if (resolve.data.address.hasOwnProperty('city')) {
                        this.setState(
                            {
                                city: resolve.data.address.city,
                            },
                            () => {
                                this.getWeatherData();
                            }
                        );
                    } else {
                        this.setState(
                            {
                                city: resolve.data.address.county,
                            },
                            () => {
                                this.getWeatherData();
                            }
                        );
                    }
                })
                .catch((err) => console.log(err));
        };

        const error = () => {
            console.log('Something went wrong');
        };

        navigator.geolocation.getCurrentPosition(success, error, { timeout: 10000 });
    }

    render() {
        let sunRise = '-- AM';
        let sunSet = '-- PM';

        if (this.state.weatherData != null) {
            const localOffset = -new Date().getTimezoneOffset();
            const remoteOffset = this.state.weatherData.timezone / 60;
            const tzDiff = (localOffset - remoteOffset) * 60 * 1000;
            const rise = new Date(this.state.weatherData.sys.sunrise * 1000 - tzDiff);
            const set = new Date(this.state.weatherData.sys.sunset * 1000 - tzDiff);
            sunRise = timeDateFormatter(rise).time;
            sunSet = timeDateFormatter(set).time;
        }

        let weather = (
            <React.Fragment>
                <MainWindow
                    condition='---'
                    temp='--'
                    city='---'
                    pullCity={this.getCityName}
                    timezone='0000'
                />
                <MoreDetails
                    wind='---'
                    humidity='---'
                    pressure='---'
                    sunset='-- PM'
                    sunrise='-- AM'
                    pullCity={this.getCityName}
                />
            </React.Fragment>
        );

        if (this.state.weatherData) {
            weather = (
                <React.Fragment>
                    <MainWindow
                        condition={this.state.weatherData.weather[0].main}
                        temp={Math.round(this.state.weatherData.main.temp)}
                        city={this.state.weatherData.name}
                        pullCity={this.getCityName}
                        timezone={this.state.weatherData.timezone}
                    />
                    <MoreDetails
                        wind={this.state.weatherData.wind.speed}
                        humidity={this.state.weatherData.main.humidity}
                        pressure={this.state.weatherData.main.pressure}
                        sunset={sunSet}
                        sunrise={sunRise}
                        pullCity={this.getCityName}
                    />
                </React.Fragment>
            );
        }
        return <section className={classes.layout}>{weather}</section>;
    }
}

export default Layout;
