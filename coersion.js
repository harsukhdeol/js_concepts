//type casting - converting done explicitly
//coersion - converting types done implicitly

// == allows type conversion, === doesnt
//3 types of conversions: to string, to bool, to num

//Primitives

String(123)//explicit
123 + ''//implicit

Boolean(2)//explicit
if (2) { } //implicit - logical context
!!2 //implicit - logical operator
2 || 'hi' //implicit - logical operator - return val of original operands

let x = 'hi' && 123;
console.log(x);//123

x = 'hi' || 123;
console.log(x);//hi - since first condition is true

Boolean('')           // false
Boolean(0)            // false     
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false

//empty objects/ arrs are true - any nonprimitive is true

Number('123')   // explicit
    + '123'          // implicit
123 != '456'    // implicit
4 > '5'         // implicit
5 / null          // implicit
true | 0        // implicit

Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
Number(" 12 ")                 // 12
Number("-12.34")               // -12.34
Number("\n")                   // 0
Number(" 12s ")                // NaN
/*
Engine trims leading and trailing whitespaces 
- empty string left -> return 0
- result string doesnt resemble valid number -> return NaN
*/

null == 0               // false, null is not converted to 0
null == null            // true
undefined == undefined  // true
null == undefined       // true - only equals undefined
NaN == NaN              //false
//NaN doesn't equal anything, not even itself

//Objects

/* Have toPrimitive method for numeric and string conversion
algo:
1. if input primitive, return
2. call input.toString, return if primitive
3. call input.valueOf, return if primitive
4. no primitive? - throw TypeError
*/

console.log("foo" + + "bar")
/* Unary + operator has higher precendece over binary +
Unary - performs action on single operand
Binary - requires 2 operands
=> "foo" +(+"bar")
=> "foo"+NaN
=> "fooNaN"

 */

'true' == true
/* 
== triggers numeric conversion
==> NaN == 1
==> false

*/

!!"false" == !!"true"
/* 
!! converts both strings to true bools bc they're not empty
==> true == true
==> true 
*/

0 || "0" && {}
/* ==>  (0 || "0") && {}
==> (false || true) && true  // internally - empty object are true
==> "0" && {}
==> true && true             // internally
==> {} */

{ } +[] + {} + [1]
/* 
All non-primitive vals, + - numeric conversion
first {} not considered as object, but as block declaration

==> +[]+{}+[1]
==> 0 + {} + [1]
==> 0 + '[object Object]' + [1]
==> '0[object Object]' + [1]
==> '0[object Object]' + '1'
==> '0[object Object]1' */

!+[] + [] + ![]
/* ==> (!+[]) + [] + (![])
==> !0 + [] + false
==> true + [] + false
==> true + '' + false
==> 'truefalse' */

/*
+ operator
- if at least one object, converted to primitive
    - if obj = date -> toString
    - else valueOf() used first - if doesnt return primitive, toString(() used
- after conversion, if at least one string = concat
- if both nums = add

*/

console.log({} + [1]);//{} gets converted to [object Object] bc it has no number 
console.log(12 + null);//12+0 = 12
console.log(12 + undefined);//12+NaN = NaN
console.log('12 ' + undefined);// '12 '+ 'undefined' = '12 undefined'


/*
Implicit Typing- don't tell what type the variable is, let the engine firgure it out
Explicit typing- declare the type of variable
Nominal Typing - equivalnece of data types checked by explicit declarations/ name of types
                - declarations must be same type and name, c;asses
Structural typing - comparisions based on stucture of type, no explicit declarations
                - need to have same inside types - objects, fxns
Duck Typing - objects are compatible as long as they have the right methods and properties - don't care abt type
 */