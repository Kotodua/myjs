(function main(){
	"use strict"

	var string = prompt('Input string:');
	 
	var arr = string.split('');

	var map = {};

	for (var i in arr){
		if (map[arr[i]]){
			map[arr[i]]++;
		} else {
			map[arr[i]] = 1;
		}
	}

	var res = [];

	for (var i in map){
		if (map[i] == 2){
			res.push(i);
		}
	}
	
	console.log(res);



})()