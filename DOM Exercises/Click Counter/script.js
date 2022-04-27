let c=0
let counter = document.querySelector("#counter")
let increase =document.querySelector("#increase")
let decrease =document.querySelector("#decrease")

counter.innerHTML=c;
increase.addEventListener("click",clickEvent)
decrease.addEventListener("click",clickEvent)

function clickEvent(){
    this.id=="increase"?c++:c--;
    // if (this.id=="increase")
    //     c++;
    // else if(this.id=="decrease")
    //     c--;
    counter.innerHTML=c;
}

