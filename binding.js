/*
implicit - used in functions of objects
        - this = left side of dot - must have property you're using
*/

const user = {
    name: "billi",
    greet() {
        console.log('hello ' + this.name)
    },
    mother: {
        name: "billi's mom",
        greet() {
            console.log('hello ' + this.name)
        }
    }
}
user.greet();// this = billi
user.mother.greet();// this = billi's mom

/**
 Explicit Binding - used for functions outside of objects
 .call - pass args one at a time - immediately calls fxn
 .apply - pass args as array - immediately calls fxn
 .bind - pass args one at a time - returns fxn that can be called later
 */

function sayHi(p1) { //don't have to pass name params
    console.log('Hi Im ' + this.name + p1);
}

const anotha = {
    name: 'jenni'// still need to have property called name
}
sayHi.call(anotha, "pink")// Hi jenni
const food = [" potatoes ", " noodles "]
const jin = {
    name: 'jin'
}
sayHi.call(jin, food[0], food[1])
sayHi.apply(jin, food)//send array , gives same result

const newFxn = sayHi.bind(jin, " lemon ");//created new fxn
newFxn();//called later

// when new keyword used, this = new object created
// if nothing works, this = window object