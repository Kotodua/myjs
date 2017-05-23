var common = require("../common");
var user = require("../aut/new-user.js")
var options = common.options;
var assert = common.assert;
var expect = common.expect;

it("create new user", function (done) {
	var newUser = user.createUser("Dave");
   	expect(newUser.userName).to.equal("Dave");
   	setTimeout(function(){
   		console.log('2 sec passed');
   		done();
   	}, 2000);
   	
});

