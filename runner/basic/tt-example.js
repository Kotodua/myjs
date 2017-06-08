let testData = {}


const ttcSub = require("./ttc-sub.js"),
	  ttcSum = require("./ttc-sum.js");

async function main(){
	await ttcSub.run();
	await ttcSum.run();	
}

function pass(){
	console.log('test passed');
}

function fail(err){
	console.log(err);
}


main().then(pass).catch(fail)


