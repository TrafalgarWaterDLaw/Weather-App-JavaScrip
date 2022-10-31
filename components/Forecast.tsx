import classes from './Forecast.module.css';

interface ForecastProps {
	date?: string;
	condition?: string;
	minMaxTemp?: string;
	avgHumidity?: string;
}

const Forecast: React.FC<ForecastProps> = ({
	date,
	condition,
	minMaxTemp,
	avgHumidity,
}) => {
	return (
		<>
			<h4 className={classes.header}>Forecast</h4>

			<div className={classes.details_item}>
				<p className={classes.condition}>Date</p>
				<p className={classes.temp}>{date ? date : 'January 21 2000'}</p>
			</div>

			<div className={classes.details_item}>
				<p className={classes.condition}>Condition</p>
				<p className={classes.temp}>
					{condition ? condition : 'Hopefully Raining'}
				</p>
			</div>

			<div className={classes.details_item}>
				<p className={classes.condition}>Min/Max Temperature</p>
				<p className={classes.temp}>{minMaxTemp ? minMaxTemp : '10° - 12°'}</p>
			</div>

			<div className={classes.details_item}>
				<p className={classes.condition}>Average Humidity</p>
				<p className={classes.temp}>{avgHumidity ? avgHumidity : '100%'}</p>
			</div>
		</>
	);
};

export default Forecast;
