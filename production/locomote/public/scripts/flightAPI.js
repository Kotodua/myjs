//flightAPI.js

var link = 'http://localhost:3000/';
var fromLocationInput = document.getElementById("fromLocationInput");
var toLocationInput = document.getElementById("toLocationInput");
var dateInput = document.getElementById("dateInput");
var xhr = new XMLHttpRequest();

	var getResults = function(date, index){

		var airlines = {};
		var fromLocationCodes = {};
		var toLocationCodes = {};


		var html = '';
		if (fromLocationInput.value && toLocationInput.value){
			fromLocationCodes = getAirportCode(fromLocationInput.value);
			toLocationCodes = getAirportCode(toLocationInput.value);
			airlines = getAirlines();

			var requestCounts = airlines.length*fromLocationCodes.length*toLocationCodes.length;
			console.log('Totoal requests: '+requestCounts);

			airlines.forEach(function(airline){
				fromLocationCodes.forEach(function(fromLocation){
					toLocationCodes.forEach(function(toLocation){
						getFlights(airline.code, date, fromLocation.airportCode, toLocation.airportCode).forEach(function(flight){
							console.log('airline: '+flight.airline.name+' start: '+flight.start.airportCode+' end: '+flight.finish.airportCode+' price: '+flight.price);
							html += '<div>'+'airline: '+flight.airline.name+' start: '+flight.start.airportCode+' end: '+flight.finish.airportCode+' price: '+flight.price+'</div>'
						});
						requestCounts--;

						if (requestCounts == 0){
							document.getElementById("loader").style.display = 'none';
							document.getElementById(index+"a").innerHTML = html;
						}
					})
				})
			})
		}
	}




	var getAirlines = function(){
		return ajaxRequest(link+'airlines');
	}


	var getAirportCode = function(city){
		return ajaxRequest(link+'airports?q='+city);
	}

	var getFlights = function(airlinecode, date, fromLocationCode, toLocationCode){
		return ajaxRequest(link+'search/'+airlinecode+'?date='+date+'&from='+fromLocationCode+'&to='+toLocationCode);
	}

	var ajaxRequest = function(address){
		console.log(address);
		xhr.open('GET', address, false);
		xhr.send();

		if (xhr.status != 200) {
		  console.log( xhr.status + ': ' + xhr.statusText );
		} else {
		  return JSON.parse(xhr.responseText);
		}		
	}
