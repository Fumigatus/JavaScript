let sports=["golf","basketball","tennis"]
console.log(sports)
console.log("-------")

//push - add new item end of the list
sports.push("baseball")
console.log("push:",sports)
console.log("-------")

//unshift - add new item beginning of the list
sports.unshift("badminton")
console.log("unshift",sports)
console.log("-------")

//splice -  changes the items of an array by removing or replacing existing elements and/or adding new elements
sports.splice(1,0,"judo")
console.log("splice:",sports)
console.log("-------")

//pop - delete last item of the list
sports.pop()
console.log("pop:",sports)
console.log("-------")

//shift - delete the item beginning of the list
sports.shift()
console.log("shift:",sports)
console.log("-------")

//join - creates and returns a new string by concatenating all of the elements in an array
let joinS=sports.join(" ")
console.log("join:",joinS)
console.log("-------")

//includes - determines whether an array includes a certain value among its entries, returning true or false
console.log("include golf:",sports.includes("golf"))
console.log("include box:",sports.includes("box"))
console.log("-------")

//slice - returns a copy of a portion of an array into a new array object selected from start to end
console.log("slice:",sports.slice(2))
console.log("slice:",sports.slice(2,4))
console.log("-------")

//concat -  used to merge two or more arrays
let cars=["Opel","Ford","BMW"]
let carsAndSports=cars.concat(sports)
console.log("concat:",carsAndSports)
console.log("-------")

//foreach - executes a provided function once for each array element
sports.forEach((elm,index,self)=>console.log(elm,index,self))
console.log("-------")

//map - creates a new array populated with the results of calling a provided function on every element in the calling array
let numbers=[1,2,3,4,5,6,7]
let squaredNumbers= numbers.map(x=>x*x)
console.log("map:",squaredNumbers)
console.log("-------")

//some - tests whether at least one element in the array passes the test implemented by the provided function
const test1=numbers.some(x=>x>5)
console.log("some:",test1)
const test2=numbers.some(x=>x>10)
console.log("some:",test2)
console.log("-------")

//every - tests whether all elements in the array pass the test implemented by the provided function
const test3=numbers.every(x=>x>=1)
console.log("every",test3)
const test4=numbers.every(x=>x>=2)
console.log("every",test4)
console.log("-------")

//filter - creates a new array with all elements that pass the test implemented by the provided function
let numbers2=numbers.filter(x=>x<4)
console.log("filter",numbers2)
console.log("-------")

/*find - returns the first element in the provided array that satisfies the provided testing function
If no values satisfy the testing function, undefined is returned.*/
console.log("find:",numbers.find(x=>x>5))
console.log("find:",numbers.find(x=>x>10))
console.log("-------")

//sort - orts the elements of an array (ascending and compare utf-16) and returns the sorted array
numbers=[3,5,7,10,6,2]
numbers.sort()
console.log("sort:",numbers)
numbers.sort((x,y)=>x-y)
console.log(numbers)
console.log("-------")

/*reduce - executes a user-supplied "reducer" callback function on each element of the array, in order, 
passing in the return value from the calculation on the preceding element*/
let iValue=0
let sum=numbers.reduce((pValue,cValue)=>pValue+cValue)
console.log("reduce without initialValue:",sum)
sum=numbers.reduce((pValue,cValue)=>pValue+cValue,iValue)
console.log("reduce with initialValue=0:",sum)
iValue=5
sum=numbers.reduce((pValue,cValue)=>pValue+cValue,iValue)
console.log("reduce with initialValue=5:",sum)
