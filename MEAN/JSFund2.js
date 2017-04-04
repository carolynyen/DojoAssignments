function loop(x,y){
    var sum = 0;
    for (var i = x; i <= y; i++){
        sum += i;
    }
    console.log(sum);
}

function looparray(arr){
    var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i]<min){
            min = arr[i];
        }
    }
    console.log(min);
}
array = [3,2,-1,0];

function arrayavg(arr){
    var sum = 0;
    for (var i in arr){
        sum += arr[i];
    }
    return sum/arr.length;
}

var x = function(x,y){
    var sum = 0;
    for (var i = x; i <= y; i++){
        sum += i;
    }
    console.log(sum);
}

var y = function(arr){
    var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i]<min){
            min = arr[i];
        }
    }
    console.log(min);
}

var z = function(arr){
    var sum = 0;
    for (var i in arr){
        sum += arr[i];
    }
    return sum/arr.length;
}

var object =
{   x: function(x,y){
        var sum = 0;
        for (var i = x; i <= y; i++){
            sum += i;
        }
        console.log(sum);
       },
    y: function(arr){
        var min = arr[0];
        for (var i = 0; i < arr.length; i++){
            if (arr[i]<min){
                min = arr[i];
            }
        }
        console.log(min);
        },
    z: function(arr){
        var sum = 0;
        for (var i in arr){
            sum += arr[i];
        }
        return sum/arr.length;
        }
};

var person = {
    name: "car",
    distance_traveled: 0,
    say_name: function(){alert(this.name);},
    say_something: function(x){console.log(this.name+" says '"+x+"'");},
    walk: function(){console.log(this.name+" is walking");
                    this.distance_traveled+=3;
                    return this;},
    run: function(){console.log(`${this.name} is running`);
                    this.distance_traveled+=10;
                    return this;},
    crawl: function(){console.log(this.name+" is running");
                    this.distance_traveled+=10;
                    return this;}
};

person.walk().run().crawl();
console.log(person.distance_traveled);
