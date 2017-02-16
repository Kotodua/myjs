function selfcall(name){
	var name = name || "Name"; 
	return function(secondName){
		console.log("Hello "+name+" "+secondName);
	}
};

selfcall()("SN");
selfcall("Vasya")("Pupkin");

(function (){
	var name = "Name"; 
	return (function(){
		console.log("Hello "+name+" "+secondName);
	});
})("SecondCall");