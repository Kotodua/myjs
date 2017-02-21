(function main(){

	var Obj = function(name){
		this.name = name;
	}

	Obj.prototype.canRun = true;

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

var Dog = function(name){
	this.name = name;
};

Dog.prototype = Object.create(Obj.prototype);
Dog.prototype.constructor = Dog;

var pet = new Dog("Charlik");
pet.run();
console.log(pet);



})()