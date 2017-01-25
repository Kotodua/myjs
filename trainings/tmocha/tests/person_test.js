var expect = chai.expect;

describe("Person", function(){
	describe("constructor", function(){
		it("should have a default name", function(){
			var person = new Person();
			expect(person.name).to.equal("noname");
		})

		it("should set person's name if provided", function(){
			var person = new Person("Steve");
			expect(person.name).to.equal("Steve");
		})
	})

	describe("#greet", function(){
		it("should use target in greeting if provided", function(){
			expect(new Person("Steve").greet("world")).to.equal("-Steve says: Hello world");
		})
		it("should throu new error if target is not provided", function(){
			expect(function() {
				(new Person()).greet()
			}).to.throw(Error);
		})
	})

	describe("#lateGreet", function(){
		it("should pass an error if no target is passed", function(done) {
			(new Person()).lateGreet(null, function(err, greetings) {
				expect(err).to.be.an.instanceof(Error);
				done();
			});
		});

		it("should greed passed target after one second", function(done) {
			(new Person("Steve")).lateGreet("world", function(err, greetings) {
				expect(greetings).to.equal("-Steve says: Hello world");
				done();
			});
		});
	});
})