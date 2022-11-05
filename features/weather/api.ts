import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { WeatherState } from './weather-type';

const API_KEY = '42732ae2525f4de680d142656220511'

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
    reducerPath: 'weather',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.weatherapi.com/v1/' }),
    endpoints: (builder) => ({
        getCurrentWeather: builder.query<WeatherState, string>({
          query: (city) => `forecast.json?key=${API_KEY}&q=${city}&days=2&aqi=no&alerts=no`,
        }),
      }), 
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCurrentWeatherQuery } = weatherApi