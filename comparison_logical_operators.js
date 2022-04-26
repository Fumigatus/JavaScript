//comparison
let price="100"
let user="John"


console.log(`"${price}"==1"`,price==1)
console.log(`"${price}"==100`,price==100) 
console.log("--------")
console.log(`"${price}"==100`===1) 
console.log(`"${price}"==100`===100) 
console.log("--------")
console.log("!=",price!=user)
console.log(">",price>10)
console.log("<=",price<=10)
console.log("--------")
console.log("&&",price<1000 && user=="John")
console.log("--------")
console.log("||",price<10 || user=="John")
console.log("--------")
console.log("!", !(price<10|| user=="John"))