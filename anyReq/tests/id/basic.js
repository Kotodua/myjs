const
	envInit = require("../../lib/envInit.js");
	requestParser = require("../../lib/requestParser.js");

let id = envInit.id.connect();


let createUser = id.post.auth.register{redirect_url: "https%3A%2F%2Fid-dev.teradek.com%23confirmation", autologin: true}.body{email:"aleksandr.tyrenko+test5@teradek.com",firstName:"Aleksand",lastName:"Tyrenko",password:"tyr144358"}
let userToken = createUser.response.auth_token;

{
	"meta": {
		"status": "ok",
		"error": null
	},
	"response": {
		"user": {
			"id": "9733"
		},
		"auth_token": "515fff99-1fa0-46b5-b0db-e12f019b382f",
		"ttl": 259200
	}
}