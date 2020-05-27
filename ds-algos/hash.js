//Dictionaries - amp key-value pairs, store in buckets for retrieval
//Time complexity O(1) for space, search , insert, delete - worst O(n)
//takes key input and performs hash fxn- converts strings to nums (index)
//- each string should be hashed to unique number

let containsDuplicate = function (nums) {
  if (nums === null) return false;

  // create hash fxn
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map[num]) {
      return true;
    } else {
      map[num] = true; //map string value of num to true if it doesnt exist
    }
    console.log(map);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 3]));
