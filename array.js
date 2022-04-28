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