var common = require("../common");
var options = common.options;
var assert = common.assert;
var expect = common.expect;

it("greet new user", function (done) {
   	expect("Dave").to.equal("Dave");
   	done();
});

