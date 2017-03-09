import UIKit

struct Card {
    var value: String
    var suit: String
    var numerical_value: Int
    func show(){
        print(value, "of", suit, ": value", numerical_value)
    }
}

class Deck {
    var cards: [Card]
    var oldcards: [Card]
    init() {
        self.cards = []
        self.oldcards = []
        let suits = ["Clubs","Spades","Hearts","Diamonds"]
        let values = ["A":1 , "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "10":10, "J":11, "Q":12, "K":13]
        for suit in suits {
            for (key,value) in values {
            self.cards.append(Card(value:key, suit: suit, numerical_value: value))
            }
        }
        self.oldcards = self.cards
    }
    func reset() {
        self.cards = self.oldcards
    }
    func deal() -> Card? {
        if self.cards.count > 0 {
            return self.cards.remove(at: 0)
        }
        else {
            return nil
        }
    }
    func shuffle() {
        for i in 1...100{
            let index = Int(arc4random_uniform(UInt32(self.cards.count)))
            let temp = self.cards.remove(at: index)
            let index2 = Int(arc4random_uniform(UInt32(self.cards.count)-1))
            self.cards.insert(temp, at: index2 + 1)
            let temp2 = self.cards.remove(at: index2)
            self.cards.insert(temp2, at: index)
        }
    }
}

class Player {
    var name: String
    var hand: [Card] = []
    init(name: String) {
        self.name = name
    }
    func draw(deck: Deck) -> Card? {
        if let card = deck.deal(){
            self.hand.append(card)
            return card
        }
        else {
            return nil
        }
    }
    func discard(card: Card) -> Bool {
        for i in 0...self.hand.count {
            if (self.hand[i].value == card.value) && (self.hand[i].suit == card.suit) {
                self.hand.remove(at: i)
                return true
            }
        }
        return false
    }
}

var Deck1 = Deck()
Deck1.shuffle()
var Player1 = Player(name: "Carolyn")
print(Player1.draw(deck: Deck1))
print(Player1.hand)




