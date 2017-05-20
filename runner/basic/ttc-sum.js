var calc = require('../AUT/calc.js');
var expect    = require("chai").expect;


exports.run = function(){

	describe("Sum test case", function() {
	    it("check different numbers sum", function() {
	      var posAndPos = calc.methods.sum(4, 2);
	      var negAndNeg  = calc.methods.sum(-4, -1);
	      var negAndPos = calc.methods.sum(4, -2)

	      expect(posAndPos).to.equal(6);
	      expect(negAndNeg).to.equal(-5);
	      expect(negAndPos).to.equal(2);
	    });
	});
}
