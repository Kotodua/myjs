(function main(){
	"use strict"


function rec(){
	console.log(new Date());
	setTimeout(function(){
		setTimeout(rec, 500);
	}, 500);
}

rec();


(function tmo(){
	setTimeout(function(){
	console.log('one more timeout');
}, 2000)	
})()


})()
