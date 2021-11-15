const message = document.getElementById("message");

var param = new URLSearchParams(window.location.search)
var fname = param.get("fname");
var lname = param.get('lname');
var favSport = param.get('sport');
var playedName = param.get('played');
var coachedName = param.get('coached');
var betOnName = param.get('betOn');
var favLevel = param.get('fav_level');
var totalOutput= document.createTextNode('First name: '+fname+'\nLast name: '+lname+'\nFavorite sport: '+
				favSport+'\nPlayed: '+played+'Coached: '+coached+'\nBet on: '+betOn+
				'\nFavorite level: '+favLevel);
message.innerHTML(totalOutput);

