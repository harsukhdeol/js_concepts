function User(name, age) {//constructor fxn
    this.name = name;
    this.age = age;
    this.online = false;
};

User.prototype.print = function () {// access methods - dont use arrow fxns here- doesnt pass on this
    console.log(`${this.name} is ${this.age} years old`)
}
//access constructor with User.prototype.constructor
var sukh = new User("sukh", 7);
sukh.print()

function Admin(name, age) {//pass args as array
    //   console.log(args)
    User.apply(this, [name, age]);//apply constructor to new object that is created
    this.members = 89;
}
Admin.prototype = Object.create(User.prototype);//prototype is an object - can be as reference to create new objects
Admin.prototype.deleteMember = function () {//User doesn't have access to this method = prototype chain
    this.members--;
    console.log(`Member count: ${this.members}`)
}
var admin = new Admin('admin', 90);
admin.print()//inherited properties from user
admin.deleteMember()