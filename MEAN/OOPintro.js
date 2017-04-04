/* **************** Game Constructor ******************
private vars: consumerPrice, dealerCost
private methods: myPrivateFunction: just console.logs, no logic
public properties:  _name: acquired from parameters
                    type: constant, 'board game'
                    player: array


public methods:     addPlayer: adds a player by name to player array
                    showPrivateVariables: console.logs our private variables
on run: runs myPrivateFunction
returns: ourGame object.
*****************  END *******************/

function GameConstructor(consumerPrice,dealerCost,name, inStock){

  var consumerPrice = consumerPrice;
  var dealerCost = dealerCost;
  var ourGame = {};

  ourGame._name = name;
  ourGame.type = 'board game';
  ourGame.player = [];

  ourGame.addPlayer = function(player_name){
    ourGame.player.push(player_name);
  }
  ourGame.showPrivateVariables = function(){
    console.log(dealerCost);
    console.log(consumerPrice);
  }

  function myPrivateFunction(){
    console.log('hello, I am going to create a new object when I am returned!');
  }

  myPrivateFunction();
  return ourGame;
}

function NinjaConstructor(name, age, prevOccupation) {
  var ninja = {};     // the object that will eventually be returned
/*
Addition of properties to ninja.
*/
  ninja.name = name;
  ninja.age = age;
  ninja.prevOccupation = prevOccupation;
/*
Addition of methods to ninja
*/
  ninja.introduce = function() {
    console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
  }
/*
return ninja
*/
  return ninja;
}


                      // Create the Andrew Ninja
var Andrew = NinjaConstructor("Andrew", 24, "Teacher");
                      // Create the Michael Ninja
var Michael = NinjaConstructor("Michael", 34, "Founder");
                      // here we redefine the introduce method for a particular "Instance" or Object
Michael.introduce = function() {
  console.log("I am the Sensei!")
}


function NinjaConstructor2(name, prevOccupation) {
    if (!(this instanceof NinjaConstructor)) {
   // the constructor was called without "new".
   return new NinjaConstructor(name, prevOccupation);
 }
  this.name = name;
  this.prevOccupation = prevOccupation;
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
  }
}
var dylan = new NinjaConstructor('Dylan', 'Construction Worker');
var nikki = NinjaConstructor2('Nikki','Historian');

function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log("this is a private method");
  }
  // PUBLIC
  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation;
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod(); // this works since it is a scope that can access privateMethod!
    console.log(privateVar);      // this works too!
  }
}

var Pariece = new Ninja("Pariece", 24, "TFA Teacher");

function User(name, ssn){
  var social = ssn;
  this.name = name;
  // Adds a so-called 'getter' function to allow reading private variables
  this.getSSN = function(){
    return social;
  }
}
var mike = new User('Mike', 274164398);

function Ninja(name, age, prevOccupation) {
  // PRIVATE
  var self = this; // HERE WE HAVE DECLARED SELF to EQUAL THE NEW OBJECT WE CREATE WITH NEW
  var privateVar = "This is a private variable";
  var privateMethod = function() {
    console.log("this is a private method for " + self.name);     // refer to name via self
    console.log(self);
  }
  //PUBLIC
  this.name = name;
  this.age = age;
  this.prevOccupation = prevOccupation
  this.introduce = function() {
    console.log("Hi my name is " + this.name + ". I used to be a " + this.prevOccupation + " and now I'm a Ninja!");
    privateMethod();
    console.log(privateVar);
  }
}
var Speros = new Ninja("Speros", 24, "MBA");

var MyObjConstructor = function(name){
  var myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
  this.name = name; // but you can see the name!
  this.method = function(){
    console.log( "I am a method");
  };
}
var obj1 = new MyObjConstructor('object1');
var obj2 = new MyObjConstructor('object2');
console.log(obj1);

obj1.newProperty = "newProperty!";
obj1.__proto__.anotherProperty = "anotherProperty!";
console.log(obj1.anotherProperty); // anotherProperty!
console.log(obj1.newProperty); // newProperty!
// What about obj2?
console.log(obj2.newProperty); // undefined
console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!

function Cat( cat_name ) {
  var name = cat_name;
  this.getName = function() {
    return name;
  };
}
//adding a method to the cat prototype
Cat.prototype.sayHi = function(){
  console.log('meow');
};
//adding properties to the cat prototype
Cat.prototype.numLegs = 4;
var muffin = new Cat('muffin');
var biscuit = new Cat('biscuit');
console.log(muffin, biscuit);
//we access prototype properties the same way as we would access 'own' properties
muffin.sayHi();
biscuit.sayHi();
console.log(muffin.numLegs);
muffin.__proto__.numLegs ++;
console.log(biscuit.numLegs);
// doing this to muffin will mess up all the cats!



/* ********** Our Node Class **********
Generates a node for a singly linked list
parameters:
  val: a numerical value
private variables/functions:
  none:
public properties/methods:
  val: val;
  next: // another Node or null
  passThis: a function that passes a console log of this and self.
************** END **********   */
var Node = function(val){
  this.val = val;
  this.next = null;
}
Node.prototype.passThis = function(custom_return){
  console.log(this, "this");
  console.log(this.self, "self");
  console.log(custom_return, "My Return");
  return custom_return;
}
// ****************** END OF NODE ******************
/* ************* Singly Linked List Class (SingleList) *****************
Creates a simple singly linked list class with not too many methods yet!
parameters: none
private: none
public properties:
  head: first node in the List
public methods:
  add: adds a new node based on a value passed in. returns this
  dequeue: removes the head, and gives it to a callback, if a callback is passed. returns this
  remove_tail: removes the tail, and gives it to a callback as an argument, only if a callback is passed. returns this.
************** END **********   */
var SingleList= function(){
  this.head = null;
}
SingleList.prototype.add = function (val) {
  if (!this.head){
    this.head = new Node(val);
    return this;
  }
  var current = this.head;
  while(current.next){
    current = current.next;
  }
  current.next = new Node(val);
  return this;
};
SingleList.prototype.dequeue = function (callback) {
  var eliminatedNode = this.head;
  this.head = this.head.next;
  eliminatedNode.next = null;
  if (typeof(callback)=='function'){
    callback(eliminatedNode);
  }
  //console.log(this.head); optional
  return this;
};
// Write a remove tail! :)
// ************************ END OF LIST ************************
sList = new SingleList();
sList.add(1).add(2).add(3).add(4).head.next.passThis(sList).dequeue(
  function callback(myNode){
    console.log(myNode.val, "CHAINING INSANITY!");
  })
  .dequeue(
    function anotherCallback(myNode){
      console.log("******************************");
      console.log('Seriously, Stop!', myNode);
    });

    function Ninja(name){
      this.name = name;   // creating instance variables
      this.distance_traveled = 0;
    }
    // creating an instance method
    Ninja.prototype.walk = function() {
        console.log(this.name + ' is walking');
        this.distance_traveled += 1;
        return this;      // have this method return its own object
      };
    // creating an instance method
    Ninja.prototype.run = function() {
        console.log(this.name + ' is running');
        this.distance_traveled += 5;
        this.displayDistanceTraveled();
        return this;      // have this method return its own object
      };
    //another instance method
    Ninja.prototype.displayDistanceTraveled = function() {
        console.log('distance traveled: ', this.distance_traveled);
    }


    // creating instances/objects
    var ninja1 = new Ninja('Jay');
    var ninja2 = new Ninja('Michael');
    var ninja3 = new Ninja('Andrew');


    ninja1.walk().run().walk().run().run();  // because walk/run returns itself, we can chain these methods


    // you can also log ninja1 and study it
    console.log(ninja1);
