let x = 1;
x = -x;
console.log(x);

let a = 1;
let b = 3;
console.log(3 - 1);

console.log(5 % 2);

console.log(2 ** 3);

console.log(9 ** (1 / 2));
console.log(27 ** (1 / 3));

console.log("my" + "string");
console.log("1" + 2);
console.log(1 + "2");
console.log(2 + 2 + "1");
console.log("2" + 2 + 1);
console.log(6 - "2");

console.log(+true);
console.log(+false);
console.log(+"234");

let a1 = 1;
let b1 = 2;
let c = 3 - (a1 = b1 + 1);
console.log(c);

let a2, b2, c2;
a2 = b2 = c2 = 2 + 2;
console.log(a2, b2, c2);

let count = 1;
let r = count++;
console.log(count, r);

let count2 = 1;
let r2 = ++count2;
console.log(count2, r2);

let a3 = (1 + 2, 3 + 4);
console.log(a3);

for (let a = 1, b = 3, c = a * b; a < 10; a++, b++, c++) {
  console.log(a, b, c);
}
