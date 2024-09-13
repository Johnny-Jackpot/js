let user = {
  name: "John",
  money: 1000,
  [Symbol.toPrimitive](hint) {
    return hint === "string" ? `name: ${this.name}` : this.money;
  },
};

console.log(`${user}`);
console.log(+user);
console.log(user + 500);

let anotherUser = {
  name: "John",
  money: 1000,
  toString() {
    return `name: ${this.name}`;
  },
  valueOf() {
    return this.money;
  },
};

console.log(`${anotherUser}`);
console.log(+anotherUser);
console.log(anotherUser + 500);
