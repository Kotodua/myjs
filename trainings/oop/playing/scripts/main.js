(function main(){
	"use strict"

function sum(a){
	return function other(b){
		return a + b;
	}
}

console.log(sum(1)(2))

})()