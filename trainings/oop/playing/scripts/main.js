(function main(){
	"use strict";



	(function selfcall(){
		var name = "Name"; 
		return function(secondName){
			console.log("Hello "+name+" "+secondName);
		}
	})("SN1")

})();

