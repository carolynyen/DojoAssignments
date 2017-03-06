//: Playground - noun: a place where people can play

import UIKit

let type: String = "Rectangle"
let description: String = "A quadrilateral with four right angles"
var width: Double = 5.0
var height: Double = 10.5
var area: Double = width * height
height += 1
width += 1
area = width * height
// Note how you can "interpolate" variables into Strings using the following syntax
print("The shape is a \(type) or \(description) with an area of \(area)")

let numberOfChampionships = 5
let name = "Kobe"
print("My favorite player is \(name) and he has \(numberOfChampionships) rings")
print("His jersey number is \(8 * 3)")


var rings = 5
if rings >= 5 {
    print("You are welcome to join the party")
} else if rings > 2 {
    print("Decent...but \(rings) rings aren't enough")
} else {
    print("Go win some more rings")
}

var crazy = true
if !crazy {
    print("Let's party!")
}

print("The maximum value \(Int.max)")
print("The minimum value \(Int.min)")

print("The maximum value \(Int32.max)")
print("The minimum value \(Int32.min)")

print("The maximum value \(UInt32.max)")
print("The minimum value \(UInt32.min)")

var myInt32: Int32 = 3
var myNormalInt: Int

// This will not error, because we first convert Int32 to instance of Int Type
myNormalInt = Int(myInt32)
print("Addition \(1 + 3)")
print("Subtraction \(1 - 3)")
print("Multiplication \(1 * 3)")
print("Division \(1 / 3)")

// loop from 1 to 5 including 5
for i in 1...5 {
    print(i)
}
// loop from 1 to 5 excluding 5
for i in 1..<5 {
    print(i)
}
var start = 0
var end = 5
// loop from start to end including end
for i in start...end {
    print(i)
}
// loop from start to end excluding end
for i in start..<end {
    print(i)
}
var i = 1
while i < 6 {
    print(i)
    i = i+1
}





