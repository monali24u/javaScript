// Object oriented programming

// what is 'this'? it's a variable, but its value changes dynamically
// normally, 'this' refers to the object that the function is attached to. the "host object"

var whoAmIFun = function(){
    console.log(this.name)
}

var Mona = {
    name : 'Monali',
    whoAmI : whoAmIFun
}

Mona.whoAmI()

//////////////////////////////
var outer = {
    name : 'outer',
    whoAmI : whoAmIFun,
    inner : {
        name : 'inner',
        whoAmI : whoAmIFun
    }
}


//outer.whoAmI()
//outer.inner.whoAmI()


// OOP lets us define CLASSES, which is like a blueprint (or a factory) for making objects.
// Individual objects that are created from that blueprint are called INSTANCES of that class.
// The process of making instances is called INSTANTIATION

var Cat = function(name, species, angerLevel, meow, looks){
    this.name = name
    this.species = species
    this. angerLevel = angerLevel
    this.meow = meow
    this.looks = looks
}
Cat.prototype.yell = function(){
    console.log(this.name + " says " + this.meow + ".")
}
// In javascript, every function has a prototype

// invoking this function with the 'new' keyword makes this function behave like a constructor function.
var felix = new Cat('felix', 'cartoon', 4, 'me-OW', 'tuxedo')
//console.log(felix)
//felix.yell()

/////////////////////////////////////////////////////////////////////////////////////////////////////
// OOP with es6(ECMAscript6) syntax.

class Cat1 {
    constructor(name, species, angerLevel, meow, looks){
        this.name = name;
        this.species = species;
        this.angerLevel = angerLevel;
        this.meow = meow;
        this.looks = looks;
    }

    sayMeow() {
        console.log(this.name + " says " + this.meow + ".");
    }
};

var felix = new Cat1('felix', 'cartoon', 4, 'me-OW', 'tuxedo')
felix.sayMeow();
