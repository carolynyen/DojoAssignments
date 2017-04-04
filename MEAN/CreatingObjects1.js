function VehicleConstructor(name, wheels, passengers){
    var vehicle = {};
    vehicle.name = name;
    vehicle.wheels = wheels;
    vehicle.passengers = passengers;
    vehicle.make_noise = function (){
        console.log("vrooom!");
    }
    return vehicle;
}

var bike = VehicleConstructor("bike", 2, 1);
bike.make_noise = function(){
    console.log("ring ring!");
};

var Sedan = VehicleConstructor("Sedan", 4, 4);
Sedan.make_noise = function(){
    console.log("Honk Honk!");
};
Sedan.make_noise();

var bus = VehicleConstructor("bus", 4, 20);
bus.pickup = function(people){
    bus.passengers += people;
    console.log(bus.passengers);
};
bus.pickup(2);
