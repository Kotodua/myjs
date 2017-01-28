(function main(){

function Human(){
//	this.type = 'Human';
}

Human.prototype.say = function(speach){
	console.log(this.type+' saying: '+speach);
}

Human.prototype.type = "Human"

function Emploee(){
//	this.type = 'Emploee';
} 



Emploee.prototype = Object.create(Human.prototype);
Emploee.prototype.constructor = Emploee;
Emploee.prototype.type = "Emploee";

Emploee.prototype.work = function (){
	console.log(this.type + " can do what " + this.type + "'s doe's.");

}

function Doctor(){
//	Emploee.call(this);
//	this.type = 'Doctor';	
}

Doctor.prototype = Object.create(Emploee.prototype);
Doctor.prototype.constructor = Doctor;
Doctor.prototype.room = 'empty';

var emp = new Emploee();



var doc = new Doctor();
doc.work();
console.log(doc.room);

var doc2 = new Doctor();
console.log(doc2.room);
doc2.prototype.room = "4x5";
console.log(doc2.room);

console.log(doc.room);

console.log(doc);
console.log(Doctor);


console.log('emp room'+ emp.room);

})()