//https://javascript.info/types
"use strict";

let message = "hello";
message = 123456;

let n = 123;
n = 12.345;

let inf = 1 / 0;
let inf2 = Infinity;
let notNum = "foo" / 2;

let r1 = NaN + 1;
let r2 = 3 * NaN;

let x = 9007199254740991 + 1;
let x2 = 9007199254740991 + 2;

const bigInt = 1234567890123456789012345678901234567890n;

const tUndef = typeof undefined;
const tNum = typeof 0;
const tBigInt = typeof 10n;
const tBool = typeof true;
const tStr = typeof "foo";
const tSymb = typeof Symbol("id");
const tMath = typeof Math;
/*
* The result of typeof null is "object".
* That’s an officially recognized error in typeof,
* coming from very early days of JavaScript and kept for compatibility.
* Definitely, null is not an object. It is a special value with a separate type of its own.
* The behavior of typeof is wrong here.
* */
const tNull = typeof null;
const tLog = typeof console.log;
