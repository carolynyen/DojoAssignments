//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"
var number = 2
if number % 2 == 0 {
    print("Number is even")
} else {
    print("Number is odd")
}

//for i in 1...125{
//    print(i)
//}

for i in 1...100{
    if !((i % 5 == 0) && (i % 3 == 0)) {
        if (i % 3 == 0) {
            print("Fuzz")
        }
        else if (i % 5 == 0){
            print("Buzz")
        }
    }
    else {
        print("FizzBuzz")
    }
}

var toDoList: [String] = ["Learn iOS", "Build the next Flappy Bird", "Retire in Cancun"]
var toDoList2 = [String]()              // Setting the array type and initializing the array
toDoList2.append("Learn iOS")
toDoList2.append("Build the next Flappy Bird")
toDoList2.append("Retire in Cancun")
print(toDoList2)

var arrayOfInts = [1, 2, 3, 4, 5]      // Note that we let Swift infer the type here
// The first number lives at index 0.
print("\(arrayOfInts[0])")
// The second number lives at index 1.
print("\(arrayOfInts[1])")
// The third number lives at index 2.
print("\(arrayOfInts[2])")
// The fourth number lives at index 3.
print("\(arrayOfInts[3])")
// The fifth number lives at index 4.
print("\(arrayOfInts[4])")

var arrayOfInts2 = [1, 2, 3, 4, 5]
// => "[1, 2]"
print("\(arrayOfInts2[0...1])")
// => "[2, 3, 4]"
print("\(arrayOfInts2[1..<4])")
// => "[3, 4]"
print("\(arrayOfInts2[2...3])")

var arrayOfInts3 = [1, 2, 3, 4, 5]
var popped = arrayOfInts3.remove(at: 0)
print(popped)


var arrayOfInts4 = [1, 2, 3, 4, 5]
arrayOfInts4.insert(6, at: 5)
arrayOfInts4.insert(6, at: arrayOfInts.count)
print(arrayOfInts4)


