//ES9
const animals={
    tiger : 5,
    lion : 10,
    horse : 7,
    fish : 12
}


//array spread
// const arr=[1,2,3,4]

// const add = (a,b,c,d)=>{
//     return a+b+c+d
// }
// console.log(add(...arr))

function objectSpread(p1,p2,p3){
    console.log("p1:",p1)
    console.log("p2:",p2)
    console.log("p3:",p3)
}

const {tiger, lion, ...rest} = animals
console.log("tiger's value:",tiger)
console.log("rest of the array:",rest)
console.log("--------")

console.log("with function")
objectSpread(tiger,lion,rest)
