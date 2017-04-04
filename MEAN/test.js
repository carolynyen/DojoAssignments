console.log("I am running from node");
console.log("hey");
var me;
console.log(me);
me = "hello";

// What happens if you do the following?
console.log(a);
var a = "weird";
// Will it throw an error?  What will it print, if it doesn't throw an error?
// How about this?
console.log(typeof(b));
var b = "weird too";
console.log(typeof(b));

var empty_array = [ ];             // create empty array with square brackets  (creates a bureau of drawers)
var string_array = [ "hi", "these", "are", "strings" ];
var x = 15;                       // you can log these vars in the console (even a whole array)
console.log("Logging variables to the console", empty_array, string_array, x);
                                  // use square brackets again(e.g. string_array[1])  to access values in the array (to open a specific drawer in the bureau)
console.log('2nd value of string_array', string_array[1]);
                                   // get the length of the array
console.log('string_array has a length of', string_array.length);
string_array.push('awesome');      // adding a new value to the array
console.log(string_array);         // you'll note that string_array now has a new value called awesome
string_array.pop();                // removing the last value in the array
console.log(string_array);         // the last value in the array is now gone!

var arr = [3, 6];
arr[234] = "hi";
//
console.log( arr.length ); // 235
console.log( arr[34] ); // undefined

arr.length = 3; //slices the array
console.log( arr[34] );
console.log( arr[234] );
console.log( arr.length );
arr.length = 500;
console.log( arr[234] );
console.log( arr.length );

var ninja = {
  name:'Susanna',
  MEAN_belt:10,
  iOS_belt:10,
  python_belt:10,
  php_belt:9, // she hadn't mastered deploying yet!
  ruby_belt:9.75 // done in 1.5 hrs though!
}
for (var key in ninja) {
  if (ninja.hasOwnProperty(key)) {
    console.log(key);
    console.log(ninja[key]);
  }
}

var object = { helloFunc: function(){console.log('hello there');}}
object.helloFunc;

var dojo;                                 // creates an empty object
dojo = {
  name: 'Coding Dojo',                         // property can store a string
  number_of_students: 25,                      // property can store a number
  instructors: ['Andrew', 'Michael', 'Jay'],   // property can store arrays
  location: {                                  // property can even store another object!
    city: 'San Jose',
    state: 'CA',
    zipcode: 95112
  }
}                                              // access object properties with dot (.) notation
console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
console.log(dojo["name"]);                     // or bracket [] notation (note: specify key in quotes)
dojo.number_of_students = 40;                  // we can reassign any of the properties
dojo.location.city = "Bellevue";
dojo.location.state = "Washington";
dojo.location.zipcode = "unknown";             // note that we can change this from integer to string
dojo.phone_number = 1234567890 ;

var glazedDonuts = [
  {
    frosting: 'glazed',
    type: 'old fashioned',
    age: '45',
    time: 'minutes'
  },
  {
    frosting: 'glazed',
    type: 'regular',
    age: '5',
    time: 'minutes'
  },
  {
    frosting: 'glazed',
    type: 'jelly filled',
    age: '1',
    time: 'seconds'
  }
];

var purchase;
//You
if((glazedDonuts[0].age < 25 && glazedDonuts[0].time == 'minutes') || glazedDonuts[0].time == 'seconds'){
  //shop owner
  purchase = glazedDonuts[0];
}
else {
  console.log('sorry it has been out a bit longer');
}

awesome();
function awesome() {
  console.log("too good to be true");
}

var varFunction = function() {
  console.log("How will this get hoisted?")
}
console.log(varFunction);
