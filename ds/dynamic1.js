//n steps, can take 1 or 2 at a time

//memoization - store previous results
var climbStairs = function (n) {
  let memo = [n + 1];
  return climb(0, n, memo);
};

var climb = function (i, n, memo) {
  console.log("run");
  if (memo[i] > 0) return memo[i];
  console.log(memo);
  if (i > n) return 0;
  if (i == 0) return 1;
  memo[i] = climb(i + 1, n, memo) + climb(i + 2, n, memo);

  return memo[i];
};

climbStairs(3);
