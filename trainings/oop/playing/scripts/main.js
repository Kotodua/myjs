(function main(){
	"use strict"


	//setTimeout(funct, 1000);


var Some = function(){
	this.name = 'vasya';


	this.getName = function(){
		console.log(this.name);
	}
}


function show(){
	var s = new Some();

	s.getName();
}

setTimeout(show, 1000);

})()
