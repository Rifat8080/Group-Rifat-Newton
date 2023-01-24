"use strict";
// Extra Long Factorials Project
function extraLongFactorials(n) {
  let result = [BigInt(0), BigInt(1)];

  // Arrow function for the conditional factorial

  const factorial = (num) =>
    typeof result[num] !== "number"
      ? num - BigInt(1) > 0
        ? num * factorial(num - BigInt(1))
        : BigInt(1)
      : result[num];

  console.log(String(factorial(BigInt(n))));
}

extraLongFactorials(25);
