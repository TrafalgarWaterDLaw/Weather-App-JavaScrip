import classes from './Content.module.css';

import Container from './Container';
import Search from './Search';
import Details from './Details';
import Forecast from './Forecast';

import MianSection from './MainSection';

import { useState } from 'react';

import { useGetCurrentWeatherQuery } from '../features/weather/api';

const Content: React.FC = () => {
	const [enterdString, setEnteredString] = useState('');
	const { data, error, isLoading } = useGetCurrentWeatherQuery(enterdString);

	/**
	 * ?Setting the correct date format
	 */
	const date = data?.location.localtime;
	const fullDate = date
		? new Date(date).toLocaleDateString('en-us', {
				weekday: 'long',
				year: 'numeric',
				month: 'short',
				day: 'numeric',
		  })
		: '';

	const forecastDate = data?.forecast.forecastday[0].date;
	const forecastDay = forecastDate
		? new Date(forecastDate).toLocaleDateString('en-us', {
				weekday: 'long',
				year: 'numeric',
				month: 'short',
				day: 'numeric',
		  })
		: '';

	const submitHandler = (enteredData: string) => {
		setEnteredString(enteredData);
		return enteredData;
	};

	return (
		<div className={classes.main}>
			<div className={classes.background}>
				{data ? (
					<MianSection
						name={data.location.name}
						date={fullDate}
						temp={Math.floor(data.current.temp_c)}
					/>
				) : (
					<MianSection />
				)}
			</div>

			<div className={classes.content}>
				<Container>
					<Search handleSubmit={submitHandler} />
					{data ? (
						<>
							<Details
								condition={data.current.condition.text}
								wind={data.current.wind_kph}
								cloud={data.current.cloud}
								humidity={data.current.humidity}
							/>
							<Forecast
								date={forecastDay}
								condition={data.forecast.forecastday[0].day.condition.text}
								minMaxTemp={`${data.forecast.forecastday[0].day.mintemp_c}° - ${data.forecast.forecastday[0].day.maxtemp_c}°`}
								avgHumidity={`${data.forecast.forecastday[0].day.avghumidity}`}
							/>
						</>
					) : (
						<>
							<Details />
							<Forecast />
						</>
					)}
				</Container>
			</div>
		</div>
	);
};

export default Content;
