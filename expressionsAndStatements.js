//Expressions - produce a value, don't necessarily change state
/* 
2 + 2 * 3 / 2

    (Math.random() * (100 - 20)) + 20 */

/* functionCall();

window.history ? useHistory() : noHistoryFallback()

1+1, 2+2, 3+3

declaredVariable

true && functionCall()

true && declaredVariable */

/*Statements - perform actions
        - can't be used as fxn args, right side of assignments, operands, return vals

if
if-else
while
do-while
for
switch
for-in
with (deprecated)
debugger
variable declaration
*/

if (true) {
    function foo() { } // top level of block, declaration
}

function foo() { } //global level, declaration

function foo() {
    function bar() { } //top level of block, declaration
}

function foo() {
    return function bar() { } // named function expression
}

foo(function () { }) // anonymous function expression

function foo() {
    return function bar() {
        function baz() { } // top level of block, declaration
    }
}
/*   
  function () {} // SyntaxError: function statement requires a name
  
  if (true){
    function () {} //SyntaxError: function statement requires a name
  }
 */
//Convert expressions to statements with semicolon
2 + 2; //statement


//Comma returns last expression - if everything in one parenthesis
console.log(1, 2, 3, 4)// returns everything
console.log((1, 2, 3, 4))//returns 4

//Labels - prepend to expression/ expression statement- not creating variable
loop: {
    for (const i = 0; i < 2; i++) {
        for (const n = 0; n < 2; n++) {
            break loop //breaks outer loop and stops entire loop
        }
    }
}