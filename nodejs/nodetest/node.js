console.log('launched');

(var rem = function(){
	console.log("action");
	var a = 10;
	return function(){
		console.log(a);
	}

})();

setTimeout(function(){
	console.log('tada');
}, 5000);

rem();