function Deck(){
    if (!(this instanceof Deck)){
    return new Deck();
    }
    this.cards = [];
};
Deck.prototype.formdeck = function(){
    var suits = ["S","D","C","H"];
    var values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    for (var i in suits){
        for (var j in values){
        this.cards.push(suits[i]+values[j]);
        }
    }
    return this;
}

Deck.prototype.shuffle = function(){
    for (var i = 1; i < 100; i++) {
        var index = Math.floor(Math.random()*52);
        var index2 =  Math.floor(Math.random()*52);
        var temp = this.cards[index];
        this.cards[index] = this.cards[index2]
        this.cards[index2] = temp;
    }
    return this;
}

Deck.prototype.deal = function(){
    var random =  Math.floor(Math.random()*52);
    var temp = this.cards[random];
    this.cards[random] = this.cards[this.cards.length-1]
    this.cards[this.cards.length-1] = temp;
    return this.cards.pop();
}

Deck.prototype.reset = function(){
    this.cards = [];
    this.formdeck();
    return this;
}

function Player(name, deck){
    if (!(this instanceof Player)){
    return new Player(name, deck);
    }
    this.deck = deck
    this.name = name;
    this.hand = [];
}

Player.prototype.takecard = function(){
    this.hand.push(this.deck.deal());
    return this;
}

Player.prototype.discard = function(){
    return this.hand.pop();
}

var Deck1 = new Deck();
Deck1.formdeck();
Deck1.shuffle();
// Deck1.reset();
var me = new Player("car", Deck1);
me.takecard().takecard().takecard();
console.log(me.hand);
me.discard();
console.log(me.hand);
console.log(Deck1.cards.length);
