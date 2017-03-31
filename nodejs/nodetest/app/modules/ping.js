
var util = require('util')
var exec = require('child_process').exec;

var puts = (error, stdout, stderr) => { console.log(stdout) }
exports.ping = () => {exec("ping localhost", puts);}

exports.pingGoogle = () => {exec("ping google.com", puts);};
