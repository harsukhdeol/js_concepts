// add 2 ints without using +/-

var getSum = function (a, b) {
  //b used to keep track of where the 1 to carry over is
  // once b = 0, there is nothing to carry over
  while (b !== 0) {
    let carry = a & b; // will give 1 when both are 1

    a = a ^ b; // actually adds - dont consider carry
    b = carry << 1; // makes b another number that has to be added, keep track of carries
  }
};

getSum(1, 3);
