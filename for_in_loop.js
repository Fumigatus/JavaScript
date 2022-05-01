var obj = {a: "John", b: 2, c: true};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}