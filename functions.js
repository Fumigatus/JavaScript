let username="John"

function helloWorld(user){
    console.log("Hello,",user)
}
helloWorld(username)
console.log("------")

let number1=5,number2=10
function addition(n1,n2){  //function name and parameters
    return n1+n2     //body
}
console.log("add:",addition(number1,number2))
console.log("------")

//asnyc and snyc -- callback
function printScreen1 (){
    console.log("First")
}

function printScreen2 (callback1,callback2){
   setTimeout(function(){
       callback1()
console.log("second")  
callback2()
}, 1000);
}

function printScreen3 (){
    console.log("third");
}
printScreen2(printScreen1,printScreen3);

