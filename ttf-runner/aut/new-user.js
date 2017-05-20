this.name = '';

exports.createUser = function(name){
	this.name = name;
	return {'userName': this.name};
}

exports.greeting = function(){
	return "Hello, my name is "+this.name;
}
