let config = require('../config.json');

module.exports.id = {
	connect: function(){
		console.log("connected to id");
		return config.core.coreURL;
	}
}