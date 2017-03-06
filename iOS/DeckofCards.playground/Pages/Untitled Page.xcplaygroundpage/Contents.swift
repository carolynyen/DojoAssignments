import UIKit

struct Card {
    var value: String
    var suit: String
    var numerical_value: Int
}

class Deck {
    var cards: [Card]
    var oldcards: [Card]
    init() {
        self.cards = []
        self.oldcards = []
        let suits = ["Clubs","Spades","Hearts","Diamonds"]
        let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
//        let numerical_values = [1,2,3,4,5,6,7,8,9,10,11,12,13]
        for suit in suits {
            for value in values {
            self.cards.append(Card(value: value, suit: suit, numerical_value: 1))
            }
        }
        self.oldcards = self.cards
    }
    func reset() {
        self.cards = self.oldcards
    }
    func deal() -> Card {
        let random = Int(arc4random_uniform(UInt32(self.cards.count)))
        let card = self.cards.remove(at: random)
        return card
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
    func draw(deck: Deck) -> Card {
        let card = deck.deal()
        self.hand.append(card)
        return card
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
print(Deck1.deal())
Deck1.shuffle()
var Player1 = Player(name: "Carolyn")
print(Player1.draw(deck: Deck1))




