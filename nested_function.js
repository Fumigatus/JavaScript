//nested function
username="John",departman="Computer Science"
function info(name,depart){
    const allinfo=()=>"Welcome "+name+" your departman is "+depart
    console.log(allinfo())
}
info(username,departman)
console.log("------")


function makeCounter() {
    let counter = 0;
  
    return function () {
      return counter++;
    };
  }
  
  let counter = makeCounter();
  
  console.log(counter());
  console.log(counter()); 
  console.log(counter()); 