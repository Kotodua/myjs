(function main(){
'use strict'

function Counter(){
	var currentCount = 1;

	//return this.counter();
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
		this.cuttentCount += 1;
	},
	counter: function (){
		console.log("hi there");
	} 
}

function Clock(){
	name = 'clock';
	Counter.call(this);
}

Clock.prototype = Object.create(Counter.prototype);
Clock.prototype.constructor = Clock;

var clock = new Clock();

clock.counter();

console.log(clock);

})()