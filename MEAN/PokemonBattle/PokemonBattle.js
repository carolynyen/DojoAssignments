$(document).ready(function(){
  var game = {
    players: [],
    addPlayer: function(name){
      var player = playerConstructor(name);
      game.players.push(player);
      return this;
    }
  };

  function playerConstructor(name){
    var player = {};
    player.name = name;
    player.hand = [];
    player.addCard = function(div){
      var card = Math.floor(Math.random() * 152) + 1;
      $.get("http://pokeapi.co/api/v1/pokemon/" + card + "/", function(res){
        $("." + div).html("<h1>" + res.name + "</h1>" +
        "<img src='http://pokeapi.co/media/img/" + card + ".png'>" +
        "<h3>Type</h3><ul><li>" + res.types[0].name + "</li></ul>" +
        "<h3>Height</h3><p>" + res.height + "</p>" +
        "<h3>Weight</h3><p>" + res.weight + "</p>" +
        "<h3>Attack</h3><p>" + res.attack + "</p>")
        card = res;
        player.hand.push(card);
        console.log(player.hand);
        return player;
      }, "json");
    };
    return player;
  }

game.addPlayer("Glen")
game.players[0].addCard("player1");
game.addPlayer("You")
game.players[1].addCard("player2");
  var result = function (){
    if(game.players[0].hand[0].attack > game.players[1].hand[0].attack) {
      $('.winner').append("<h3>Player1 wins </h3>");
    }
    else{
      $('.winner').append("<h3>Player2 wins </h3>");
    }
  }
  setTimeout(result, 10000);
  });
