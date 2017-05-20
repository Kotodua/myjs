var request = require('request');
var api_link = "http://node.locomote.com/code-task/";


function Flights(){


}

Flights.prototype = {
	getAirlines: function(resolve, reject){
		console.log('getting airlines...');
		request(api_link+"airlines", function(error, res, body){
			if (error) reject(err);
			else resolve(body);
		});

	},

	getAirports: function(city, resolve, reject){
		if (city){
			request(api_link+"airports?q="+city, function(error, res, body){
				if (error) reject(err);
				else resolve(body);
			});	
		} else {
			console.log('error. no airport name in the request');
		};


	},

	getFlight: function(airline_code, parameters, resolve, reject){
		if (airline_code && parameters){
			var req_to_api = api_link+"flight_search/"+airline_code+
							'?date='+parameters.date+
							'&from='+parameters.from+
							'&to='+parameters.to;
			request(req_to_api, function(error, res, body){
				if (error) reject(err);
				else resolve(body);
			});	
		} else {
			console.log('error. no airline code or parameters in the request');
		};
	}

}

module.exports = Flights;