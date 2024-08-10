console.log(1 || 0);
console.log(null || 1);
console.log(null || 0 || 1);
console.log(undefined || null || 0);
console.log(1 && 2 && null && 3);
console.log(1 && 2 && 3);
console.log(null || 2 || undefined);
console.log(1 && null && 2);
console.log(null || (2 && 3) || 4);

function betweenInclusively(a, b) {
  return function (x) {
    return a <= x && x <= b;
  };
}

const between14And90 = betweenInclusively(14, 90);

console.log(between14And90(13));
console.log(between14And90(14));
console.log(between14And90(15));
console.log(between14And90(89));
console.log(between14And90(90));
console.log(between14And90(91));
