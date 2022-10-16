import classes from './RecentCities.module.css';

const RecentCities: React.FC = () => {
	return (
		<>
			<h4 className={classes.header}>Recent Cities</h4>
			<div className={`${classes.city_container}`}>
				<p className={`${classes.city}`}>Califonia</p>
				<p className={`${classes.city}`}>Califonia</p>
				<p className={`${classes.city}`}>Califonia</p>
            </div>
            <hr className={ classes.rule } />
		</>
	);
};

export default RecentCities;
