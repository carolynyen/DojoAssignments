//: Playground - noun: a place where people can play

import UIKit

let suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
var deckOfCards = [String: [Int]]()
for suit in suits{
    deckOfCards[suit] = cards
}
print(deckOfCards)

func sayHello(name: String = "buddy") -> String {
    return "Hey \(name)"
}
var greeting: String?
greeting = sayHello()
print(greeting)

func printDescription(width w: Int, height h: Int) {
    print("My width is \(w) and my height is \(h)")
}
printDescription(width: 10, height: 20)

func printDescriptionWithWidth(w: Int, andHeight h: Int) {
    print("My width is \(w) and my height is \(h)")
}
printDescriptionWithWidth(w: 10, andHeight: 20)


var myInt = 1
func changeMyInt(someInt: inout Int) {         // must specify "inout"
    someInt = someInt + 1
    print(someInt)
}
changeMyInt(someInt: &myInt)                            // must pass in the variable with "&" symbol
print(myInt)

func calculateAreaOfRectangleWithWidth(w: Int, andHeight h: Int) -> Int {
    return w * h
}
var area = calculateAreaOfRectangleWithWidth(w: 10, andHeight: 3)
print(area)

func findMinOf(arr: [Int]) -> Int? {
    if arr.count > 0 {
        var min = arr[0]
        for num in arr {
            if num < min {
                min = num
            }
        }
        return min
    } else {
        return nil
    }
}


