import type { NextPage } from 'next';
import Content from '../components/Content';
import { Provider } from 'react-redux';
import { store } from '../app/store';

const Home: NextPage = () => {
	return (
		<Provider store={store}>
			<Content />
		</Provider>
	);
};

export default Home;
