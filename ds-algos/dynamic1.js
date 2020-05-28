//n steps, can take 1 or 2 at a time
var climbStairs = function (n) {
  let count = 0;
  var climb = function (n) {
    if (n == 1) {
      //write base case
      return 1;
    }
    return climb(n - 1) + climb(n - 2);
  };
  return count;
};

//limbStairs(3);
//memoization - store previous results

function square(n) {}
