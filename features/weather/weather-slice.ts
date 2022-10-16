// DUCKS APTTERN
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const axios = require('axios');

/**
 * *Tried to encoumpass it within another object, for better control
 * ?Defines the shape of the weather
 */
export interface WeatherState {
	location: {
		name: string;
		localtime: string;
	};
	current: {
		temp_c: string;
		condition: {
			text: string;
		};
		wind_kph: number;
		humidity: number;
		cloud: number;
	};
	forecast: {
		forecastday: [
			{
				date: string;
				day: {
					maxtemp_c: string;
					mintemp_c: string;
					avghumidity: string;
					condition: {
						text: string;
					};
				};
			},
		];
	};
}

const initialState: WeatherState = {
	location: {
		name: 'New York',
		localtime: 'NAN',
	},
	current: {
		temp_c: 'NAN',
		condition: {
			text: 'NAN',
		},
		wind_kph: 0,
		humidity: 0,
		cloud: 0,
	},
	forecast: {
		forecastday: [
			{
				date: 'NAN',
				day: {
					maxtemp_c: 'NAN',
					mintemp_c: 'NAN',
					avghumidity: 'NAN',
					condition: {
						text: 'NAN',
					},
				},
			},
		],
	},
};

async function getWeather(location: string) {
	try {
		const response = await axios.get(
			`https://api.weatherapi.com/v1/forecast.json?key=d2d4c4b77d60436ba87150436221210&q=${location}&days=2&aqi=no&alerts=no`,
		);
		response.data.map((city: WeatherState) => {
			return {
				location: {
					name: city.location.name,
					localtime: city.location.localtime,
				},
				current: {
					temp_c: city.current.temp_c,
					condition: {
						text: city.current.condition.text,
					},
					wind_kph: city.current.wind_kph,
					humidity: city.current.humidity,
					cloud: city.current.cloud,
				},
				forecast: {
					forecastday: [
						{
							date: city.forecast.forecastday[0].date,
							day: {
								maxtemp_c: city.forecast.forecastday[0].day.maxtemp_c,
								mintemp_c: city.forecast.forecastday[0].day.mintemp_c,
								avghumidity: city.forecast.forecastday[0].day.avghumidity,
								condition: {
									text: city.forecast.forecastday[0].day.condition.text,
								},
							},
						},
					],
				},
			};
		});
	} catch (error: any) {
		return error.message;
	}
}

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		// Update current condition
		// Upadet forecast
		updateWeather(state, action: PayloadAction<string>) {
			const data = getWeather(action.payload);
			state.location.name = 'South Rand'
			return console.log(data);
		},
	},
});

/**
 * * Action creators are functions that return action objects
 */
export const { updateWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
