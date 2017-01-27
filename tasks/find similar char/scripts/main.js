(function main(){
	"use strict"

	var string = prompt('Input string:');
	 
	var arr = string.split('');

	var res = [];
	arr.sort();

	console.log(arr);

	for (var i = 0; i < arr.length; i++){
		var j = 0;
		while (arr[i] == arr[i+1]){
			j++;
			i++;
		}

		if (j == 1){
			res.push(arr[i]);
		}
		
	}


console.log(res);


})()