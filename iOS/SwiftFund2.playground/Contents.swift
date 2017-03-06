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