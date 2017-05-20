"use strict";
var ping = require("./modules/ping.js")
var colors = require("colors");
var hello = () => {
	ping.ping();
	ping.pingGoogle();
	var string = "hello world";
	console.log(string.green);	
}



hello();

