//: Playground - noun: a place where people can play

import UIKit



func tossCoin() -> String {
    let random = Int(arc4random_uniform(2))
    var coin: String
    print("Tossing a coin!")
    if random == 0 {
        print("Heads")
        coin = "Heads"
    }
    else {
        print("Tails")
        coin = "Tails"
    }
    return coin
    
}

func tossMultipleCoins(number: Int) -> Double {
    var heads: Double = 0
    var tails: Double = 0
    for i in 1...number {
        if tossCoin() == "Heads" {
            heads += 1
        }
        else {
            tails += 1
        }
    }
    return (heads/Double(number))
}

print(tossMultipleCoins(number:80))



