///=== - strict equality, type and value
//false
/* console.log(22 === '22');
console.log(false === 0);

//loose equality - allow type coersion
//true
console.log(22 == '22');
console.log(false == 0);

console.log(null == undefined);//t
console.log(null == false);//f
console.log(undefined == false);//f
 */
//typeOf

console.log(typeof []);//object
console.log(typeof null);//object
console.log(typeof NaN);//number
console.log(typeof (() => { }));//function


var x;
console.log(typeof x);//undefined