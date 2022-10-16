const API_URL =
	'http://dataservice.accuweather.com/locations/v1/cities/search?';
const API_KEY = 'cMBcCz2WGnxicCxQOJL0qkL3kNFkQQIu';
const API_ENDPOINT = `${API_URL}apikey=${API_KEY}&q=manchester`;

interface ResponseCityType {
	key: string,
	LocalizedName: string,
	Country: {
		ID: string
		LocalizedName: string
	}
	GeoPosition: {
		Latitude: number
		Longitude: number
	}
}


export const cityData = fetch(API_ENDPOINT).then((response) => response.json()).then((response) => {
	return response.map((city: ResponseCityType) => {
		return {
			options: {
				value: `${city.GeoPosition.Latitude} ${city.GeoPosition.Longitude}`,
				label: `${city.LocalizedName}, ${city.Country.LocalizedName}`,
			}
		}
	})
})

console.log(cityData, 'city')
console.log('city', 'city')
