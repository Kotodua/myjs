var Helper = require('../helper/helper.js');
var helper = new Helper();

function BattleField(playerId){
	var partType = 'o'; 

	this.playerId = playerId;
	this.ships = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
	this.shipsLength = 0;
	this.board = [];

	this.crateShip = function(shipSize, direction){
		var ship = [];
		
		if (direction == "vertical"){
			for (var x = 0; x < shipSize; x++){
					ship.push(['o','.']);
			}
			ship.push(['.','.']);
		} else {
			var middleLine = [];
			var lastLine = [];

			for (var x = 0; x < shipSize; x++){
				middleLine.push('o');
				lastLine.push('.');				
			}
			middleLine.push('.');
			lastLine.push('.');
			ship.push(middleLine, lastLine);
		}
		return ship;
	}


	this.addShipToMap = function(ship, size, direction, shift)	{
		for (var i = 0+shift; i < this.board.length; i++){
			for (var j = 0+shift; j < this.board[0].length; j++){
				if (direction == 'vertical'){
					switch (size){
						case 2:
							if (this.board[i][j] == '0' &&
									this.board[i+1][j] == '0') {
								this.drawShip(ship, i, j, size);
								return true;
							}
							break;
						case 3:
							if (this.board[i][j] == '0' &&
									this.board[i+1][j] == '0' &&
									this.board[i+2][j] == '0') {
								this.drawShip(ship, i, j, size);
								return true;
							}
							break;
						case 4:
							if (this.board[i][j] == '0' &&
									this.board[i+1][j] == '0' &&
									this.board[i+2][j] == '0' &&
									this.board[i+3][j] == '0') {
								this.drawShip(ship, i, j, size);
								return true;
							}
							break;											
					}
				} else {
					switch (size){
						case 1:
							if (this.board[i][j] == '0') {
								this.drawShip(ship, i, j, size);
								return true;
							}
							break;
						case 2:
							if (this.board[i][j] == '0' &&
									this.board[i][j+1] == '0') {
								this.drawShip(ship, i, j, size);
								return true;
							}
							break;
						case 3:
							if (this.board[i][j] == '0' &&
									this.board[i][j+1] == '0' &&
									this.board[i][j+2] == '0') {
								this.drawShip(ship, i, j, size);
								return true;
							}
							break;
						case 4:
							if (this.board[i][j] == '0' &&
									this.board[i][j+1] == '0' &&
									this.board[i][j+2] == '0' &&
									this.board[i][j+3] == '0') {
								this.drawShip(ship, i, j, size);
								return true;
							}
							break;											
					}					
				} 
			}
		}
	}	

	this.drawShip = function(ship, i, j, size){
		for (var shipY = 0; shipY < ship.length; shipY++){
			for (var shipX = 0; shipX < ship[0].length; shipX++){
				try{
					this.board[i+shipY][j+shipX] = ship[shipY][shipX];
				} catch (e){
					console.log('e');
				}		
			}
		}
		this.shipsLength += size;
	}


}

BattleField.prototype = {
	generateField: function(){
		var that = this;

		(function makeField(){
			for (var i = 0; i < 10; i++){
				that.board.push([0,0,0,0,0,0,0,0,0,0]);
			}
			var mapOrder = helper.shuffleArray(that.ships);
			var shift  = helper.getRandomNumber(2);

			for (var i = 0; i < mapOrder.length; i++){
				var direction = helper.getRandomBoolean() ? 'vertical' : 'horizontal';
				var newShip = that.crateShip(mapOrder[i], direction);
				that.addShipToMap(newShip, mapOrder[i], direction, shift);
			}

			if (that.shipsLength == 20){
				return true;
			} else {
				that.board = [];
				that.shipsLength = 0;
				makeField();
			}
		})();
	}
}



module.exports = BattleField;