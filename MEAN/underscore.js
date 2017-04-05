var _ = {
   map: function(arr, callback) {
       var array = [];
       for(var i = 0; i < arr.length; i++) {
           array.push(callback(arr[i]));
       }
       return array;
   },
   reduce: function(arr, callback, memo) {
     var current = memo;
     for (var i = 0; i < arr.length; i++) {
         current = callback(current, arr[i]);
     }
     return current;
   },
   find: function(arr, callback) {
       for(var i = 0; i < arr.length; i++) {
           if (callback(arr[i]) == true) {
               return(arr[i]);
           };
       }
   },
   filter: function(arr, callback) {
     var array = [];
     for(var i = 0; i < arr.length; i++) {
         if (callback(arr[i]) == true) {
             array.push(arr[i]);
         };
     }
     return array;
   },
   reject: function(arr, callback) {
       var array = [];
       for(var i = 0; i < arr.length; i++) {
           if (callback(arr[i]) == false) {
               array.push(arr[i]);
           };
       }
       return array;
   }
 }
// you just created a library with 5 methods!
// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(evens); // if things are working right, this will return [2,4,6].
// var evens2 = _.map([1, 2, 3, 4, 5, 6], function(num){ return num * 3; });
// console.log(evens2); // if things are working right, this will return [2,4,6].
var evens3 = _.reduce([1, 2, 3, 4, 5, 6], function(memo, num){ return num + memo; }, 10);
console.log(evens3); // if things are working right, this will return [2,4,6].
// var evens4 = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(evens4); // if things are working right, this will return [2,4,6].
// var evens5 = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(evens5); // if things are working right, this will return [2,4,6].
