function VehicleConstructor(name, wheels, passengers, speed){
    if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,wheels,passengerNumber, speed);
    }
    this.name = name;
    this.speed = speed;
    this.wheels = wheels;
    this.passengers = passengers;
    var self = this;
    var distance_traveled = 0;
    var updateDistanceTraveled = function(){
        distance_traveled += self.speed;
    }
    this.make_noise = function (){
        console.log("vrooom!");
    }
    this.move = function(){
        updateDistanceTraveled();
        this.make_noise();
    }
    this.checkMiles = function(){
        console.log(distance_traveled);
    }
}

var bike = new VehicleConstructor("bike", 2, 1);
bike.make_noise = function(){
    console.log("ring ring!");
};

var Sedan = new VehicleConstructor("Sedan", 4, 4);
Sedan.make_noise = function(){
    console.log("Honk Honk!");
};
Sedan.make_noise();

var bus = new VehicleConstructor("bus", 4, 20, 100);
bus.pickup = function(people){
    bus.passengers += people;
    console.log(bus.passengers);
};
bus.pickup(2);
bus.checkMiles();
bus.move();
bus.checkMiles();
