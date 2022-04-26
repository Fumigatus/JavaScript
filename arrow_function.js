//arrow function
const multiple=(n1,n2)=>n1*n2;
console.log(multiple(10,20))
console.log("------")

let number1=Math.floor(Math.random()*10)
let number2=Math.floor(Math.random()*10)
const compare=(n1,n2)=> n1<n2 ? "number1 smaller than number2":"number2 smaller than number1";
console.log(`number1: ${number1} number2: ${number2} => ${compare(number1,number2)}`)
console.log("------")

const add=(n1,n2)=> n1+n2
console.log(add(number1,number2))