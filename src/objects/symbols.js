let id = Symbol();
let idWithDesc = Symbol("id");
let idWithDesc2 = Symbol("id");
// console.log(idWithDesc === idWithDesc2);
// console.log(idWithDesc.toString());
// console.log(idWithDesc.description);
let user = {
  name: "John",
};
user[id] = 1;
// console.log(user);
// console.log(user[id]);
user.age = 23;

for (let key in user) {
  // console.log(user[key]);
}
// console.log(`User id: ${user[id]}`);
const anotherUser = Object.assign({}, user);
// console.log(anotherUser);
let idGlobal = Symbol.for("id");
let anotherIdGlobal = Symbol.for("id");
// console.log(idGlobal === anotherIdGlobal);
// console.log(Symbol.keyFor(idGlobal));
// console.log(Symbol.keyFor(idWithDesc));
// console.log(idWithDesc.description);
console.log(Object.getOwnPropertySymbols(user));
