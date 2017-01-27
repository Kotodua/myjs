(function (){
'use strict'

function Counter(){
	this.currentCount = 1;
}


Counter.prototype = {
	constructor: Counter,
	getCount: function(){
		console.log(this.currentCount);
	},
	setCount: function(value){
		this.currentCount = value;
	},
	increase: function(){
		this.currentCount++;
	}
}


var Clock = function(){
	Counter.call(this);
};

Clock.prototype = Object.create(Counter.prototype);
Clock.prototype.constructor = Clock;

var handClock = new Clock();

window.$ = handClock;

})()