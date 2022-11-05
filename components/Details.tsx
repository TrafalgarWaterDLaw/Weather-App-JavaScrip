import classes from './Section.module.css';

interface DetailsProp {
	condition?: string;
	wind?: number;
	humidity?: number;
	cloud?: number;
	date?: string;
	temp?: number;
}

const Details: React.FC<DetailsProp> = ({
	condition,
	wind,
	humidity,
	cloud,
	date, 
	temp
}) => {
	return (
		<>
			<h4 className={classes.header}>Weather Details</h4>

			<div className={classes.details_hiiden_item}>
				<p className={classes.date}>{ date ? date : '03 Nov 2022'}</p>
				<p className={classes.hidden_temp}>
					{temp ? `${temp}°` : 'Warn and Sunny'}
				</p>
			</div>

			<div className={classes.details_item}>
				<p className={classes.condition}>Description</p>
				<p className={classes.temp}>
					{condition ? condition : 'Warn and Sunny'}
				</p>
			</div>

			<div className={classes.details_item}>
				<p className={classes.condition}>Cloudy</p>
				<p className={classes.temp}>{cloud ? `${cloud}%` : '56%'}</p>
			</div>

			<div className={classes.details_item}>
				<p className={classes.condition}>Humidity</p>
				<p className={classes.temp}>{humidity ? `${humidity}%` : '86%'}</p>
			</div>

			<div className={classes.details_item}>
				<p className={classes.condition}>Wind</p>
				<p className={classes.temp}>{wind ? `${wind}km/h` : '0km/h'}</p>
			</div>

			<hr className={classes.rule} />
		</>
	);
};

export default Details;
