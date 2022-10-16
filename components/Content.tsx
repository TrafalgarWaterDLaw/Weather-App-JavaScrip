import classes from './Content.module.css';

import Container from './Container';
import Search from './Search';
import RecentCities from './RecentCities';
import Details from './Details';
import NextDay from './NextDay';

import MianSection from './MainSection';

const Content: React.FC = () => {
	return (
		<div className={classes.main}>
			<div className={classes.background}>
				<MianSection/>
			</div>

			<div className={classes.content}>
				<Container>
					<Search />
					<RecentCities />
					<Details />
					<NextDay />
				</Container>
			</div>
		</div>
	);
};

export default Content;
