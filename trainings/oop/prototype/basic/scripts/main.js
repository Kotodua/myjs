(function main(){

	var Obj = function(name){
		this.name = name;
		this.canRun = true;
	}

	Obj.prototype.run = function() {
		if (this.canRun){
			console.log(this.name + " is running...");
		} else {
			console.log(this.name + " can't run.")
		}		
	}

	var Table = function(name){
		this.name = name;
		this.canRun = false;
	}

	Table.prototype = new Obj();


var cat = new Obj("Cat");
cat.run();

var kt = new Table('Kitchen table');
kt.run();



})()