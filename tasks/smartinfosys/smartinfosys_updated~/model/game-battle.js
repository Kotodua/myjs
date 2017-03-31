var BattleField = require('./battle-field.js');
var Helper = require('../helper/helper.js');

var helper = new Helper();
var battleField = new BattleField();

function Game(){
	this.player1 = null;
	this.player2 = null;
	this.status = 'new';
	this.currentTurn = 'p1';
	this.boardP1 = {};
	this.boardP2 = {};


	this.setFirstTurn = function(player){
		if (arguments.length > 0){
			this.currentTurn = player;
		} else {
			if (helper.getRandomBoolean()){
				this.currentTurn = 'p1';
			} else {
				this.currentTurn = 'p2';
			}
		}	 
	}
}


Game.prototype = {
	getPlayer1: function(){
		return this.player1;
	},
	
	getPlayer2: function(){
		return this.player2;
	},
	
	start: function(){
		this.status = 'started';
		this.setFirstTurn();
		this.boardP1 = new BattleField(this.player1);
		this.boardP1.generateField();
		console.log('p1: ');
		for (var i = 0; i < 10; i++){
			console.log(this.boardP1.board[i]);
		}

		this.boardP2 = new BattleField(this.player2)
		this.boardP2.generateField();
		console.log('p2: ');
		for (var i = 0; i < 10; i++){
			console.log(this.boardP2.board[i]);
		}
	},

	setPlayer1: function(id){
		this.player1 = id;
	},

	setPlayer2: function(id){
		this.player2 = id;
		this.start();
	},

	getPlayers: function(){
		if(!this.player1){
			return 0;
		} else if (this.player1 && !this.player2){
			return 1;
		} else {
			this.status;
		}
	}, 

	fire: function(playerId, coordinates){
		var coordinatesArr = coordinates.split(',').map(Number);

		if (playerId == this.player1){
			if (this.boardP2.board[coordinatesArr[0]][coordinatesArr[1]] == 'o'){
				this.boardP2.board[coordinatesArr[0]][coordinatesArr[1]] = 'x';
				return true;
			} else {
				return false;
			}
		} else {
			if (this.boardP1.board[coordinatesArr[0]][coordinatesArr[1]] == 'o'){
				this.boardP1.board[coordinatesArr[0]][coordinatesArr[1]] = 'x';
				return true;
			} else {
				return false;
			}
		}
	}

}

module.exports = Game;