var Helper = require('../helper/helper.js');
var helper = new Helper();

function BattleField(playerId){
	var partType = 'o'; 

	this.playerId = playerId;
	this.ships = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
	this.shipsLength = 0;

	this.board = [];

	var board = this.board;
	var res = 0;

	this.markAround = function(i, j, size, direction){		
		if (direction == 'horizontal'){
			switch (size){
				case 4: 
					checkDot(i-1, j+4);
					checkDot(i  , j+3, partType);
					checkDot(i  , j+4);
					checkDot(i+1, j+4);
				case 3:
					checkDot(i-1, j+3);
					checkDot(i  , j+2, partType);
					checkDot(i  , j+3);
					checkDot(i+1, j+3);
				case 2:
					checkDot(i  , j+2);
					checkDot(i+1, j+2);
					checkDot(i-1, j+2);
					checkDot(i  , j+1, partType);
					break;
			}
		} else {
			switch (size){
				case 4:
					checkDot(i+3, j, partType);
					checkDot(i+4, j);
					checkDot(i+4, j+1);
					checkDot(i+4, j-1);
				case 3:
					checkDot(i+2, j, partType);
					checkDot(i+3, j);
					checkDot(i+3, j+1);
					checkDot(i+3, j-1);
				case 2:
					checkDot(i+1, j, partType);
					checkDot(i+2, j-1);
					checkDot(i+2, j);
					checkDot(i+2, j+1);
					break;
			}
		}

		checkDot(i-1, j-1);
		checkDot(i-1, j+1);
		checkDot(i-1, j);
		checkDot(i  , j, partType);
		checkDot(i+1, j-1);
		checkDot(i+1, j+1);
		checkDot(i  , j-1);
		checkDot(i  , j+1);
		checkDot(i+1, j);
		

					
		function checkDot(dotX, dotY, marker){
			var mark = marker || '.';
			try{
				if (board[dotX][dotY] == partType){
					res++;	
				} else {
					board[dotX][dotY] = mark;
				}
			} catch (e){
				//out of range
			}				
		}
		if (res > 0) return false;
			return true;
	}


	this.getEmptyPlace = function(size, direction, shift){
		var horizontalShift = 0;
		var verticalShift = 0;
		if (direction == 'horizontal'){
			horizontalShift = size;
		} else {
			verticalShift = size;
		}

		if (direction == 'horizontal'){
			for (var i = shift; i < 10; i++){
				for (var j = shift; j < (10-size+1); j++){
					switch (size){
						case 1:
							if (this.board[i][j] == 0){
								this.markAround(i, j, size, direction);
								this.shipsLength += size;
								return true;
							}
							break;
						case 2:
							if (this.board[i][j] == 0 && this.board[i][j+1] == 0){
								this.markAround(i, j, size, direction);
								this.shipsLength += size;
								return true;
							}
							break;
						case 3:
							if (this.board[i][j] == 0 && this.board[i][j+1] == 0 && this.board[i][j+2] == 0){
								this.markAround(i, j, size, direction);
								this.shipsLength += size;
								return true;
							} 
							break;
						case 4:
							if (this.board[i][j] == 0 && this.board[i][j+1] == 0 && this.board[i][j+2] == 0 &&  this.board[i][j+3] == 0){
								this.markAround(i, j, size, direction);
								this.shipsLength += size;
								return true;
							}
							break;
					}
				}
			}
		} else {
			for (var i = shift; i < (10-size+1); i++){
				for (var j = shift; j < 10; j++){
					switch (size){
						case 1:
							if (this.board[i][j] == 0){
								this.markAround(i, j, size, direction);
								this.shipsLength += size;
								return true;
							}
							break;
						case 2:
							if (this.board[i][j] == 0 && this.board[i+1][j] == 0){
								this.markAround(i, j, size, direction);
								this.shipsLength += size;
								return true;
							}
							break;
						case 3:
							if (this.board[i][j] == 0 && this.board[i+1][j] == 0 && this.board[i+2][j] == 0){
								this.markAround(i, j, size, direction);
								this.shipsLength += size;
								return true;
							} 
							break;
						case 4:
							if (this.board[i][j] == 0 && this.board[i+1][j] == 0 && this.board[i+2][j] == 0 &&  this.board[i+3][j] == 0){
								this.markAround(i, j, size, direction);
								this.shipsLength += size;
								return true;
							}
							break;
					}
				}
			}
		}
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

			console.log('mapOrder '+mapOrder);
			for (var i = 0; i < mapOrder.length; i++){
				var direction = helper.getRandomBoolean() ? 'vertical' : 'horizontal';
				that.getEmptyPlace(mapOrder[i], direction, shift);
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