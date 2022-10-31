import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import classes from './Search.module.css';
import { FormEvent, useState } from 'react';

interface SearchProps {
	handleSubmit: (enteredData: string) => string;
}

const Search: React.FC<SearchProps> = ({handleSubmit}) => {

	const [city, setCity] = useState('')

	const submitHandler = (event: FormEvent) => {
		event.preventDefault();
		if(city.length === 0) return 
		handleSubmit(city)
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
