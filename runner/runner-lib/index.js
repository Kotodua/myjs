exports.runTestCase = function(path){
	var test = require('../'+path);
	test.run();

}

var runTestCase = function(path){
	console.log('=== Running Test Case: '+path);
	var test = require('../'+path);
	test.run();	
}

exports.runTest = function(path){
	var test = require('../'+path);
	for(var testCase in test){
		runTestCase(test[testCase].testCaseName);
	}
}