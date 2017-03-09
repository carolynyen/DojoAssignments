import UIKit

class Animal {
    var name: String?
    var health: Int
    init(name: String){
        self.name = name
        self.health = 100
    }
    func displayHealth(){
        if let n = self.name{
        print("\(n) health is \(self.health)")
        }
    }
}

class Cat: Animal {
    override init(name: String){
        super.init(name: name)
        self.health = 150
       
    }
    func growl(){
        print("RAWR")
    }
    func run(){
        if self.health < 10 {
            print("no run")
        }
        else {
        print("Running")
        self.health -= 10
        }
    }
}

class Lion: Cat {
    override init(name:String){
        super.init(name: name)
        self.health = 200
    }
    override func growl(){
        print("ROAR I am the king of the jungle!")
    }
}

class Cheetah: Cat {
    override init(name:String){
        super.init(name: name)
        self.health = 150
    }
    override func run(){
        print("Running Fast")
        self.health -= 50
    }
    func sleep(){
        if self.health + 50 < 200{
            self.health += 50
        }
        else {
            self.health = 200
        }
    }
}

var urian: Cheetah = Cheetah(name:"kk")
urian.run()
urian.run()
urian.run()
urian.run()
urian.displayHealth()

var me: Lion = Lion(name: "carolyn")
me.run()
me.run()
me.run()
me.growl()

var blah: Animal = Animal(name:"dksj")
blah.displayHealth()
