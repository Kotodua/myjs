(function main(){
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
		this.cuttentCount += 1;
	}
}

var counter = new Counter();

console.log(counter)
counter.getCount();
counter.setCount(10);
counter.getCount();

var counter2 = new Counter();

counter2.getCount();

})()