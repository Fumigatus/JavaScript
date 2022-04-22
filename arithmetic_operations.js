//arithmetic operations
let price=100;
let tax=0.18;
let priceTax=100*0.18;
let totalPrice= price+priceTax;
console.log("price:", price,"tax ratio:", tax,"tax price:", priceTax,"total price:",totalPrice);
console.log("---------")

//shortcuts
let a=10;
console.log(a);
a++;
console.log(a);
a--;
console.log(a);
a*=10;
console.log(a);
console.log("---------")

//finding the remainder
let b=10;
console.log(b%2);
console.log(b%3);
console.log("---------")

//exponentiation
let c=5;
console.log(c**3);
console.log(++c**2);
console.log("---------")

//math lib
console.log(Math.floor(1.9));
console.log(Math.ceil(1.2));
console.log(Math.round(3.4));