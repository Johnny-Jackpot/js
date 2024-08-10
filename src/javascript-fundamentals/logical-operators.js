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

let a = null;
let b = 23;
console.log(a ?? b);
console.log(a !== null && a !== undefined ? a : b);

let height = 0;
console.log(height || 100);
console.log(height ?? 100);

let heigth = null;
let width = null;
let area = (heigth ?? 100) * (width ?? 500);
console.log(area);

//error
//console.log(1 && 2 ?? 3);
console.log((1 && 2) ?? 3);
