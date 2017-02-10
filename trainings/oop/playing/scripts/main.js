(function main(){
	"use strict";
	
var C = function() {
	this.type = "C"
	
	var changeType = function(type){
		this.type = type;
	}
} 

C.prototype.counter = 0;

C.prototype.incr = function(){
	this.counter++;
}

C.prototype.get = function(){
	return this.type+' '+this.counter;
}

var c = new C();

c.incr();
console.log(c.get());


var D = function(){
	this.type = "D";
};
D.prototype = Object.create(C.prototype);
D.prototype.constructor = D;

var d = new D();

d.incr();
d.incr();
d.incr();
d.incr();
console.log(d.get());





})()
