const gateways = require('./gateways') // or get the list via API call from - https://api.client.geosurf.io/account/details/gateways

let countriesPorts = gateways.map(item => {
	return item.country_port
})

// Use random address within your request
let randomAddress = 'gw1.geosurf.io:' + countriesPorts[Math.floor(Math.random() * countriesPorts.length)]

console.log(randomAddress)