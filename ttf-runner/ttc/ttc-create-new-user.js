var common = require("../common");
var user = require("../aut/new-user.js")
var options = common.options;
var assert = common.assert;
var expect = common.expect;

it("create new user", function () {
	common.newUser = user.createUser("Dave");
   	expect(common.newUser.userName).to.equal("Dave");
});

