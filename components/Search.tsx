import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import classes from './Search.module.css';
import { FormEvent, useState } from 'react';

import { useAppDispatch } from '../app/hooks';
import { updateWeather } from '../features/weather/weather-slice'

const Search: React.FC = () => {
	
	const [city, setCity] = useState('')
	/**
	 * !Never forget the () esle we spend hours debugging again
	 */
	const dispatch = useAppDispatch()

	const submitHandler = (event: FormEvent) => {
		event.preventDefault();
		if(city.length === 0) return 
		dispatch(updateWeather(city))
	}
	
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<input
				onChange={event => setCity(event.target.value)}
				type='text'
				name='search'
				placeholder='Another location..'
				className={classes.input}
			/>
			<button className={classes.btn}>
				<FontAwesomeIcon icon={faSearch} className={ classes.icon } />
			</button>
		</form>
	);
};

export default Search;
