import classes from './Section.module.css';

const Details: React.FC = () => {
	return (
		<>
			<h4 className={classes.header}>Weather Details</h4>

			<div className={classes.details_item}>
				<p className={classes.condition}>Cloudy</p>
				<p className={classes.temp}>86%</p>
			</div>

			<div className={classes.details_item}>
				<p className={classes.condition}>Humidity</p>
				<p className={classes.temp}>86%</p>
			</div>

			<div className={classes.details_item}>
				<p className={classes.condition}>Wind</p>
				<p className={classes.temp}>6km/h</p>
			</div>

			<hr className={classes.rule} />
		</>
	);
};

export default Details;
