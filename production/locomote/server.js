//server.js

var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var Flights = require('./model/flights.js');
var flights = new Flights();

app.use(express.static('public'));

app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/airlines', function(req, res, next){
	flights.getAirlines(function(result){
		res.send(result);
	}), function(error){
		console.log(error);
	}
})

app.get('/airports', function(req,res, next){
	flights.getAirports(req.query.q, function(result){
		res.send(result);
	}, function(error){
		console.log(error);
	});
})

app.get('/search/:airline_code', function(req, res, next){
	flights.getFlight(req.params.airline_code, req.query, function(result){
		res.send(result);
	}, function(error){
		console.log(error);
	});
})

server.listen(3000);  
console.log('goto: http://localhost:3000/');