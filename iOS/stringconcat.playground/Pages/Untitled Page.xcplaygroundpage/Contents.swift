//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"
str += " you are so cool"
print("hi")
print(str)
var name: String = "Anakin"
name = "Carolyn"
var num: Int = -42
var dec: Double = 4.2
var name2 = "Me"

let name3: String = "Walker"
let immutablestring = "Carolyn Yen"
var mutablearray = ["one"]
let immutablearray = ["uno"]
mutablearray.append("two")
mutablearray + ["three", "four"]

var mutabledictionary = ["one": 1]
let immutabledictionary = ["uno": 1]
mutabledictionary["two"] = 2


var myDict2 = [String: Int]()
var dictionary = [
    "Kobe": 24,
    "Lebron": 23,
    "Rondo": 9
]
dictionary["Kobe"]
if let jerseyNumber = dictionary["Kobe"] {
    print(jerseyNumber)
}
if let lebronsNumber = dictionary.removeValue(forKey: "Lebron") {
    print(lebronsNumber)
}
for (key, value) in dictionary {
    print("The key is \(key) and the value is \(value)")
}

for x in dictionary {
    print(x)
}
