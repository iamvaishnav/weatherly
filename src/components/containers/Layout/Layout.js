import React, { Component } from 'react';
import classes from './Layout.module.scss';
import MainWindow from '../../weatherWindow/MainWindow/MainWindow';
import MoreDetails from '../../weatherWindow/moreDetails/MoreDetails';
import timeDateFormatter from '../../../utility/timeDateFormatter';
import axios from '../../../axios';
import axiosCurrent from 'axios';
import Backdrop from '../../weatherWindow/Backdrop/backdrop';
import Spinner from '../../weatherWindow/Spinner/spinner';
import { Redirect } from 'react-router-dom';

const apiKey = '79a3b91460dd7597763284d7409af41d';

class Layout extends Component {
    state = {
        city: null,
        weatherData: null,
        error: null,
        show: true,
    };

    getCityName = (name) => {
        this.setState(
            {
                city: name,
                show: true,
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
                this.setState((prevState) => {
                    return {
                        weatherData: weatherData,
                        show: false,
                    };
                });
            })
            .catch((err) => {
                this.setState((prevState) => {
                    return {
                        error: err,
                        show: false,
                    };
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
                    show={this.state.show}
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

        let weatherImg = 'default';

        if (this.state.weatherData) {
            switch (this.state.weatherData.weather[0].main) {
                case 'Fog':
                    weatherImg = 'fog';
                    break;
                case 'Thunderstorm':
                    weatherImg = 'thunderstorm';
                    break;
                case 'Drizzle':
                    weatherImg = 'rain';
                    break;
                case 'Rain':
                    weatherImg = 'rain';
                    break;
                case 'Snow':
                    weatherImg = 'snow';
                    break;
                case 'Clear':
                    weatherImg = 'clear';
                    break;
                case 'Clouds':
                    weatherImg = 'clouds';
                    break;
                case 'Mist':
                    weatherImg = 'fog';
                    break;
                case 'Haze':
                    weatherImg = 'fog';
                    break;

                default:
                    weatherImg = 'default';
                    break;
            }

            weather = (
                <React.Fragment>
                    <MainWindow
                        condition={this.state.weatherData.weather[0].main}
                        temp={Math.round(this.state.weatherData.main.temp)}
                        city={this.state.weatherData.name}
                        pullCity={this.getCityName}
                        timezone={this.state.weatherData.timezone}
                        weatherIcon={weatherImg}
                        show={this.state.show}
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

        return (
            <React.Fragment>
                {this.state.error ? <Redirect to='error' /> : null}
                <section className={[classes.layout, classes[weatherImg]].join(' ')}>
                    <Backdrop show={this.state.show}>
                        <Spinner />
                    </Backdrop>
                    {weather}
                </section>
            </React.Fragment>
        );
    }
}

export default Layout;
