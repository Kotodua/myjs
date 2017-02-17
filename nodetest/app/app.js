"use strict";
var ping = require("./modules/ping.js")

var hello = () => {
	ping.ping();
	console.log("hello world");	
}


hello();
