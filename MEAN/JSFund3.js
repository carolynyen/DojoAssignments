function personConstructor(name){
    var person = {
        name: name,
        distance_traveled: 0,
        say_name: function(){console.log(this.name);},
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
    return person;
};

function ninjaConstructor(name, cohort){
    var belts=["yellow", "red", "black"];
    var ninja = {
        name: name,
        cohort: cohort,
        beltLevel: 0,
        levelUp: function(){console.log(ninja.name+" is leveling up");
                        if (ninja.beltLevel < 2){
                        ninja.beltLevel += 1
                        ninja.belt = belts[ninja.beltLevel];};
                        return ninja;},
    };
    ninja.belt =  belts[ninja.beltLevel];
    return ninja;
};

ninjaConstructor("car").levelUp();
