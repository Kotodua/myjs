var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);
var Game = require('./model/game-battle.js');


app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});

var games = [];
var game = new Game();
games.push(game);


io.on('connection', function(client) {  
    console.log('Client connected...'+client.id);


	games.some(function(game){
		if (game.status == 'new'){
			if (game.getPlayers() === 0){ 
				game.setPlayer1(client.id);
			} else if (game.getPlayers() === 1){ 
				game.setPlayer2(client.id);
				io.sockets.connected[game.player1].emit('gamestarted', [game.boardP1, game.currentTurn, 'You are player1.']);
				io.sockets.connected[game.player2].emit('gamestarted', [game.boardP2, game.currentTurn, 'You are player2.']);
				var ngame = new Game();
				games.push(ngame);
			}
			return true;
		} 
    }); 

	client.on('turn', function(coordinates){
		if (client.id == game.player1){			
		 	if (game.fire(client.id, coordinates)){
		 		game.boardP2.shipsLength--;
		 		if (game.boardP2.shipsLength == 0){
					io.sockets.connected[game.player1].emit('you won');
					io.sockets.connected[game.player2].emit('you loose', coordinates);			 			
		 		} else {
		 			io.sockets.connected[game.player1].emit('+', [game.currentTurn, game.player2.shipsLength]);
					io.sockets.connected[game.player2].emit('+', [coordinates, game.currentTurn, game.boardP2.board]);	
		 		} 
		 	} else {
		 		game.currentTurn = 'p2';
		 		io.sockets.connected[game.player1].emit('-', [game.currentTurn]);
				io.sockets.connected[game.player2].emit('-', [coordinates, game.currentTurn]);
		 	}
	 		
		 } else {
		 	if (game.fire(client.id, coordinates)){
		 		game.boardP1.shipsLength--;
		 		if (game.boardP1.shipsLength == 0){
					io.sockets.connected[game.player2].emit('you won');
					io.sockets.connected[game.player1].emit('you loose', coordinates);			 			
		 		} else {
		 			io.sockets.connected[game.player2].emit('+', [game.currentTurn, game.player1.shipsLength]);
					io.sockets.connected[game.player1].emit('+', [coordinates, game.currentTurn, game.boardP1.board]);	
		 		} 
		 	} else {
		 		game.currentTurn = 'p1';
		 		io.sockets.connected[game.player2].emit('-', [game.currentTurn]);
				io.sockets.connected[game.player1].emit('-', [coordinates, game.currentTurn]);
		 	}		 	
		 }
	});




    client.on('disconnect', function(){
    	console.log('client disconnected: '+client.id);
    	games.some(function(game){
    		if (game.player1 == client.id && game.player2 != null){
    			game.player1 = game.player2;
    			game.player2 = null;
    			game.status = 'new';
    		} else if (game.player2 == client.id){
    			game.player2 = null;
    			game.status = 'new';
    		} else {
    			var index = games.indexOf(game);
    			if (index > -1){
    				games.splice(index, 1);   		
    			}
    					
    		}
    	})
    })
});







server.listen(4200);  
console.log('goto: http://localhost:4200/');