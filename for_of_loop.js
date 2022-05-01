const arr = ["Golf",2500,"John",()=>console.log("anon func")];

for (let element of arr) {
  console.log(element);
}
console.log("-------")

const arr2 = [10, 20, 30];

for (let value of arr2) {
  value ++;
  console.log(value);
}
console.log("-------")

const arr3 = new Map([['John', 1], ['Anna', 2], ['Smith', 3]]);

for (const entry of arr3) {
  console.log(entry);
}
