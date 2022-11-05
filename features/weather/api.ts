import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { WeatherState } from './weather-type';

const API_KEY = 'ba9509c58ec04e219e0141236223010'

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