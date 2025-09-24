function findEvenOdd(...nums) {
  let evens = [];
  let odds = [];

  for (let n of nums) {
    if (n % 2 === 0) evens.push(n);
    else odds.push(n);
  }

  return { evens, odds };
}

console.log(findEvenOdd(14, 20, 35, 40, 57, 60, 100));