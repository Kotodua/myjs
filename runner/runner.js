var runner = require('./runner-lib');

process.argv.forEach(function (val, index, array) {
	if (index === 2){
		var name = val.split('/')[val.split('/').length-1];
		var type = name.split('-')[0];
		switch(type){
			case 'tt':
				console.log('=== Running a test: '+name);
				runner.runTest(val);
				break;
			case 'ttc':
				console.log('=== Running a test case: '+name);
				runner.runTestCase(val);
				break;
		}
	}
});	

