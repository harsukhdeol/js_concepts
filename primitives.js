//Primitives are immutable

//undefined, null
//boolean, number, string - can be wrapped in objects


typeof true; //"boolean"
typeof Boolean(true); //"boolean"
typeof new Boolean(true); //"object"
typeof (new Boolean(true)).valueOf(); //"boolean"

typeof "abc"; //"string"
typeof String("abc"); //"string"
typeof new String("abc"); //"object"
typeof (new String("abc")).valueOf(); //"string"

typeof 123; //"number"
typeof Number(123); //"number"
typeof new Number(123); //"object"
typeof (new Number(123)).valueOf(); //"number"

//Primitives have access to all properties and methods defined by their obj constructors
Number.prototype.toString = function () {
    return typeof this;

}
//console.log((123).toString())// object

var num1 = 1;//number
var num2 = new Number(22);//object

var result = num1 + num2;
console.log(result, typeof (result));//object coerced into number
console.log(typeof (num1))
console.log(typeof (num2))

//Objects

//Object.freeze - returns immutable object - no properties can be changes;

const user1 = {
    name: "user1",
    info: {
        favColor: "pink"
    }
}
user1.name = "another user";// allows change

//console.log(user1.name); //prints another user

Object.freeze(user1);
user1.name = "the next user"
//console.log(user1.name); // still another user - no error, just ignored;

user1.info.favColor = "green";
//console.log(user1.info.favColor);// changes to green

//Object.freeze needs to be set on each object

const obj = {
    get greet() {
        return "hi " + this._name;
    },
    set name(val) {
        this._name = val
    }
}
obj.name = "new person";
console.log(obj.greet);

Object.defineProperties(obj, {
    id: {// define data property
        value: 42,
        writable: true,// can overwrite
        enumerable: true, // can appear in loops and iterate
        configurable: true//can be changed to accessor property/ deleted/ attributes can be changed
    },
    property2: {}
});
console.log(obj.id);