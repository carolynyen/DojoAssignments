function Vehicle(name, wheels, passengers, speed){
    if (!(this instanceof Vehicle)){
    return new Vehicle(name,wheels,passengerNumber, speed);
    }
    var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";
    this.name = name;
    this.speed = speed;
    this.wheels = wheels;
    this.passengers = passengers;
    this.VIN = genNumber();
    var self = this;
    var distance_traveled = 0;
    var updateDistanceTraveled = function(){
        distance_traveled += self.speed;
    }
    function genNumber() {
        var vin = '';
        for (var i = 0; i < 17; i+=1 ){
            vin += chars[Math.floor(Math.random()*35)];
        }
        return vin;
    }
};
Vehicle.prototype.make_noise = function (){
    console.log("vrooom!");
};

Vehicle.prototype.move = function(){
    updateDistanceTraveled();
    this.make_noise();
    return this;
};

Vehicle.prototype.checkMiles = function(){
    console.log(distance_traveled);
    return this;
};

var bike = new Vehicle("bike", 2, 1);
bike.make_noise = function(){
    console.log("ring ring!");
};

var Sedan = new Vehicle("Sedan", 4, 4);
Sedan.make_noise = function(){
    console.log("Honk Honk!");
};

var bus = new Vehicle("bus", 4, 20, 100);
bus.pickup = function(people){
    bus.passengers += people;
    console.log(bus.passengers);
};

console.log(Sedan.VIN);
