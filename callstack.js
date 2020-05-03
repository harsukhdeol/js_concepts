/*

Google V8 Engine has 
Memory Heap - where memory allocation happens
Callstack - where stack frames are as code executes
Message Queue - list of messages to be proccessed and associated callback functions to execute
            

Event Loop - looks at stack and pushes the first thing on the queue to stack when it sees empty stack
            - each message/callback processed completely before anything else is processed
JS single threaded - does one thing at a time

Callstack - data structure that records where in the program we are

Blowing the stack - when reach max call stack size
*/


function foo(b) {
    let a = 5;
    console.log("foo called");
    return a * b;
}
function bar(x) {
    let y = 3; console.log("bar called");

    return foo(x * y);
}
//console.log(bar(9));

/*
Execution Context

Global execution context created immediately
window: global object
this:window

In global creation phase, JS engine
1. creates global object
2. creates object called this
3. Set up memory space for all vars and fxns
4. assign variable declarations to undefined (HOISTING)

Execution: code runs line by line - variables have values
*/


/* console.log('name:', name); //undefined
console.log('id', id);//undefined
console.log(getUser)//[Function:getUser] */
//no reference errors = identifiers are in memory and just initialized to undefined

var name = "ahrsukh";
var id = 7;
function getUser() {
    return {
        name: name,
        id: id
    }
}

/*
Function Execution Context

Creation:
1.Create argumenst object
2.Create object called this
3. Set up memory for vars and fxns
4.Assign var declarations to undefined

When function invoked, new Execution Context created and added to Execution stack
when creation and execution of fxn finishes, execution context popped off
*/

function a() {
    var text = "new text here"
}
a();
//console.log(text); //get reference error - even if use var, scope is different

//Scope chain - will go up the chain until it finds the variable
function printName() {
    console.log(name);
}
//printName();

/*Variables created inside fxns are locally scoped - can't be accessed
 once fxn's Execution Context has been popped off stack

 If have functions nested inside another fxn , outer vars can be 
 accessed by inner vars, even if function execution is complete

 Closures
 */

function pow(exp) {
    return function inner(base) {
        let ans = base;
        for (let i = 1; i < exp; i++) {//should be recursive ik
            ans *= base;
        }
        return ans;
    }
}
var squared = pow(2);
var cubed = pow(3);
console.log(cubed(2));
console.log(squared(4));


undeclared = "variable not declared anywhere";

console.log(undeclared);//prints correctly
console.log(global.undeclared) // still works, automatically a property of global obj