/*"Instantiating" a class in JavaScriptcreates object
-not independent of its parent class

- linked to a prototype-changes to that prototype 
propagate to the new object, even after instantiation.


*/

//Base classes - don't use extend

class Food {//Classes can only contain method definitions, not data properties
    constructor(name, protien, carbs, fat) {
        this.name = name;
        this.carbs = carbs;
        this.protien = protien;
        this.fat = fat;
    }
    //No commas
    toString() {
        return `${this.name} | ${this.carbs}g C | ${this.protien}g P | ${this.fat}g F`
    }

    print() {
        console.log(this.toString())//can refer to this
    }
}

const chocolate = new Food('chocolate', 2, 3, 4);
chocolate.print()
console.log(chocolate.fat)//can refer to properties on instances directly


//Subclasses with extends
class Fruits extends Food {
    constructor(name, protien, carbs) {//defines properties of obj - only place super can be called
        super(name, protien, carbs, 0)
        //methods in constructor = static methods- not available on instances of class
    }

    //everything else is prototype method
    print() {
        super.print();
        console.log(`${this.name} has no fat`)
    }
}

const apple = new Fruits('apple', 1, 10);
apple.print()

/*
Calling new creates new object
 - gets linked to another object (prototype)
 - this value is set to refer to new object



 All functions have a property, called .prototype,
  which points to an object associated with that function.
All function prototypes have a property, called .constructor,
which points back to the function.
*/