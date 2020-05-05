//Primitive types pass by value ONLY
//Objects and fucntions pass by reference

/*Variables that are assigned a non-primitive value
are given a reference to that value-
 reference points to the object’s location in memory
 - variables don’t actually contain the value. */

var arr = [1];
var identicalArr = [1];
var copiedArr = arr;

/* console.log(arr == identicalArr);//false 
console.log(arr == copiedArr);//true
console.log(arr === copiedArr);//true
 */


arr.push(2);
//console.log([...arr]);
//console.log([...copiedArr]);//both print [1,2]

//pure functions don't affect anything in outside scope
//Function with primitive params is good
//function that takes in object is not - use Array.map/filter to copy arr


function impure(person) {
    person.age = 39;
    return person;
}

var human1 = {
    name: 'Nav',
    age: '23'
};

var changedPerson = impure(human1);
console.log(human1);
console.log(changedPerson);//both change

function pure(person) {
    var newPerson = JSON.parse(JSON.stringify(person))
    newPerson.age = 90;
    return newPerson;
}

var accChanged = pure(human1);
/* console.log(human1);//stays same
console.log(accChanged);//changes
 */
function changeAge(person) {
    person.age = 20;
    person = {
        name: 'Dil',
        age: 80
    }
    return person;
}

var newPerson = changeAge(human1);
/* console.log(human1);//age changed
console.log(newPerson);//new person created */
