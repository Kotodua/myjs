var calc = require('../AUT/calc.js');
var expect    = require("chai").expect;


exports.run = function(){
	var posAndPos = calc.methods.sum(4, 2);
	var negAndNeg  = calc.methods.sum(-4, -1);
	var negAndPos = calc.methods.sum(4, -2)
	console.log("4+2=6 is "+posAndPos===6);
	console.log("-4+(-1)=-5 is "+posAndPos===-5);
	console.log("4+2=4 is "+posAndPos===4);


}
