import classes from './MainSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateWeather } from '../features/weather/weather-slice';

interface MainWeather {
	name?: string;
	date?: string;
	temp?: number;
}

const MianSection: React.FC<MainWeather> = ({ name, date, temp }) => {
	return (
		<>
			<div className={classes.header_section}>
				<h1 className={classes.header}>the.weather</h1>
			</div>

			<div className={classes.temp_section}>
				<div className={classes.condition}>
					<p>{ temp ? `${temp}°` : '16°'}</p>
				</div>

				<div className={classes.city_name}>
					<h6>{name ? name : 'Johannesburg'}</h6>
					<p> {date ? date : '06:09 - Sunday 9 Dec 22'}</p>
				</div>

				<div className={classes.cloud_condition}>
					<FontAwesomeIcon icon={faCloudSun} className={classes.icon} />
				</div>
			</div>
		</>
	);
};

export default MianSection;
