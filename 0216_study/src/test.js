"use strict";
function getSum(nums) {
    var sum = nums.reduce(function (a, b) { return a + b; });
    return sum;
}
var tempsum = getSum([1, 2, 3, 4, 5]);
console.log(tempsum);
