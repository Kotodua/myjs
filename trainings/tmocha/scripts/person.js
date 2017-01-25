function Person(name){
	this.name = name || "noname";
}

Person.prototype = {
	greet: function(target){
		if (!target)
			throw new Error("missing target");
		return "-"+this.name+" says: Hello "+target;
	},

	lateGreet: function(target, callback){
		setTimeout(function(self) {
			try {
				callback(null, self.greet(target));
			} catch (err) {
				callback(err)
			}
		}, 1000, this)
	}
}


