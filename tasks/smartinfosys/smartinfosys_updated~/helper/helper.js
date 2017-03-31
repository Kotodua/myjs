function Helper(){};

Helper.prototype = {
	getRandomBoolean: function() {
	    if(Math.floor(Math.random()*2) == 0){
	    	return false;
	    } else {
	    	return true;
	    }
	},

	getRandomNumber: function(max){
		return Math.floor(Math.random()*max)	 
	},

	shuffleArray: function (array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  while (0 !== currentIndex) {
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

}


module.exports = Helper;