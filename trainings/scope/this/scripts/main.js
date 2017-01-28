(function main(){
	//this loosing context

	
	var a = function(){
		this.message = 'hello';

		console.log(this.message);
	}


	setTimeout(a, 1000);	


/*
	var delayMessage = function(){
		this.name = "Default name";

		this.show = function(){
			setTimeout(function(){
			console.log('hello '+this.name);
			}, 1000);	
		}
		
	}

	var dm = new delayMessage();

	dm.show();*/
})()