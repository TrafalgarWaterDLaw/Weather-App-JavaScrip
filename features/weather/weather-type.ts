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
