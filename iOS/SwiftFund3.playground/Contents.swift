//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"
var array = [Int]()
for i in 1...255{
    array.append(i)
}

for i in 1...100{
var index = Int(arc4random_uniform(255))
var temp = array.remove(at: index)
var index2 = Int(arc4random_uniform(254))
array.insert(temp, at: index2 + 1)
var temp2 = array.remove(at: index2)
array.insert(temp2, at: index)
}

var j = 0

for i in 0...254 {
    if (array[i] == 42) {
        j = i
    }
}
var life = array.remove(at: j)
print("We found life called \(life) at index \(j)")

var present: String! = "Apple Watch"         // We don't have to unwrap to use the value,
print("\(present)")
present = nil                                // but we can still set it to nil.
print("\(present)")
