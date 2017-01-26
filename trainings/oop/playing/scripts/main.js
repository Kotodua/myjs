(function main(){
	"use strict"

	function Shape(){
		this.title = "shape";
		var _local = "local value"
	}

	Shape.prototype.getLocal = function(){
		console.log(_local);
	}


	var circle = new Shape();

	console.log(circle.title)
	console.log(circle._local)
	circle.getLocal();

})()