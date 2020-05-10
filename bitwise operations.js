console.log(Number(90).toString(2));

console.log(parseInt(1111, 2))

//bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers.
//return standard js values

//first bit is negative - rest positive to add up to smaller -ve num

// ~ NOT operator - flips all bits
//js operated on base 10 - applies operators on them - gotta convert to binary manually
console.log(Number(12).toString(2));
console.log(Number(~12).toString(2))

console.log(~0b101) //0b can be used to represent binary - output will be in dec 

// & AND operator - compares each bit, return 1 is both 1, else 0

console.log((0b1010 & 0b1101).toString(2))//1000

// | OR operator - compares each bit - return 1 if 1 is found in any
console.log((0b1000 | 0b1100).toString(2))//1100

// ^ XOR - compare each bit - return 1 if find a 1 and 0 - not matching

console.log((0b1001 ^ 0b1100).toString(2))//101 - trim off leading 0




//<< Left Shift - shifts all bits over to the left - one shift = mutliplying by 2
console.log(34 << 1);
console.log(Number(34).toString(2), Number(34 << 1).toString(2));

//>> Right Shift - shifts all bits over to the right - one shift = dividing by 2
console.log(34 >> 1);
console.log(Number(34).toString(2), Number(34 >> 1).toString(2));

//>>> Zero-fill right shift- add 0 to front of num - will give same results as >> for +ve num, diff for -ve
console.log(34 >>> 1);
console.log(-34 >>> 1);
console.log(Number(34 >>> 1).toString(2), Number(-34 >>> 1).toString(2));

/*Typed Arrays - array-like objects that allow
 reading and writing with raw binary data in memory buffers

Each entry in a JavaScript typed array is a raw binary value
 in one of a number of supported formats,
  from 8-bit integers to 64-bit floating-point numbers

  Array buffers store data, views access it by providing
  starting offset ans num of elements
*/