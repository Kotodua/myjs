const
	envInit = require("../../lib/envInit.js");
	requestParser = require("../../lib/requestParser.js");

let id = envInit.id.connect();

id.create.user()