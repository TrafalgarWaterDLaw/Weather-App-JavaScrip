// DUCKS APTTERN
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
		temp_c: number;
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
		temp_c: 0,
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

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		updateWeather(state, action: PayloadAction<string>) {
			state.location.name = 'Yho Hohoho'
		},
	},
});

/**
 * * Action creators are functions that return action objects
 */
export const { updateWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
