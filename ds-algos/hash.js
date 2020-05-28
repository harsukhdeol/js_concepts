//Dictionaries - amp key-value pairs, store in buckets for retrieval
//Time complexity O(1) for space, search , insert, delete - worst O(n)
//takes key input and performs hash fxn- converts strings to nums (index)
//- each string should be hashed to unique number

//basically an array of linked lists
//each bucket = linked list - if collision, list of key-value pairs

/*
Storing into hash table:
1. compute kery's hash code
2. map hash code to index: hash%arr.length
3. add key-value pair to linked list at index

No collisions: O(n) - worst case: all key-values mapped to same index= O(n)
 */

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

//console.log(containsDuplicate([1, 2, 3, 3]));

function uniqueString(str) {
  let hash = {};
  for (let i = 0; i < str.length; i++) {
    char = str[i];
    if (hash[char]) {
      console.log("found");
      return;
    } else {
      hash[char] = true;
    }
  }
  console.log(hash);
}

//uniqueString("helo");

//check permutation

function checkPerm(str1, str2) {
  // console.log([...str1].sort().join``); // converts string to arr and sorts chars by alpha order
  //.join`` converts it back to a string

  if (!str1 || !str2 || str1.length !== str2.length) console.log("false");
  const order = (str) => [...str].sort().join``;
  if (order(str1) == order(str2)) console.log("true");
}
//checkPerm("heelo", "hi");
//checkPerm("god", "dog");

function url(str) {
  str ? str.replace(/\s/g, "%20") : str;
}
console.log(url());
