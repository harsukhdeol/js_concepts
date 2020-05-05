//Lexical scope - determined at compile time
//    - controlled by placement of fxns, block and var declarations

//let, const - block scoped {}
//var, fxns - fucntion scoped 

function declared() {
    //defined named function - hoisted
};

let name = function expression() {
    //not hoisted
}
//use expression when dont wanna make global fxn, callbacks, IIFE
let anonExpression = function () {
    //anon function set to a variable
}

let anonArrow = () => {
    //don't have 'this' value, shorter version of anon fxn expression
}

//params- vars passed in fxns
//args - values fxn recieves from params during execution


var a = 2;
(//IIFE
    function foo() {

        var a = 3;
        console.log(a); // 3

    })();//don't have to call foo(), runs immediately
console.log(a); // 2

if (true) {
    var hi = "ji";
    var a = 5;
    let go = "stop";
}
console.log(hi);//works
console.log(a);//updates to 5
//console.log(go);//go not defined

{
    let test = "inside block"
}
//console.log(test)//not defined

//IIFE with params
(function IIFE(msg, times) {
    for (var i = 1; i <= times; i++) {
        console.log(msg);
    }
}("Hello!", 5));

