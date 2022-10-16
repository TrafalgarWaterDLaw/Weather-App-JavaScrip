import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>the.weather</title>
				<meta name='author' content='R.G' />
				<link rel='icon' href='/king.svg' />
				<meta name='description' content='weather app' />
				<meta
					name='keywords'
					content='real time weather, forecasting, current weather'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
