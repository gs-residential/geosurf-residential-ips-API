const request = require('request')
const gateways = require('./gateways').gateways // or get the list via API call - https://api.client.geosurf.io/account/details/gateways

let countriesPorts = gateways.map(item => {
	return item.country_port
})

let randomAddress = 'gw1.geosurf.io:' + countriesPorts[Math.floor(Math.random() * countriesPorts.length)]
console.log(randomAddress)

// Use random address in your CURL  request




