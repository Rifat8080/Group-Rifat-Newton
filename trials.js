"use strict";
// Md Mahadi Hasan Rifat
// Extra Long Factorials Project
//<!-- Nelson Mandela Project Presents -->
const extraLongFactorials = function (n) {
  let result = [BigInt(0), BigInt(1)];

  // Arrow function for the conditional factorial

  const factorial = (num) =>
    typeof result[num] !== "number"
      ? num - BigInt(1) > 0
        ? num * factorial(num - BigInt(1))
        : BigInt(1)
      : result[num];

  console.log(String(factorial(BigInt(n))));
};

extraLongFactorials(25);

// Newton Ombese
// Minimum Distance Code Challenge
function minimumDistances(a) {
  // Declaring an empty array
  let distances = [];

  // for loop to help in iteration
  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
      let minidistance = a.lastIndexOf(a[i]) - a.indexOf(a[i]);
      distances.push(minidistance);
    }
  }

  if (distances.length === 0) {
    return -1;
  } else {
    distances.sort(function (a, b) {
      return a - b;
    });

    return distances[0];
  }
}

minimumDistances(34);
