let c=localStorage.getItem('counter')?localStorage.getItem('counter'):0
let counter = document.querySelector("#counter")
let increase =document.querySelector("#increase")
let decrease =document.querySelector("#decrease")
counter.innerHTML=c

increase.addEventListener("click",clickEvent)
decrease.addEventListener("click",clickEvent)


// counter.innerHTML=window.localStorage.getItem('counter');

function clickEvent(){
    this.id=="increase"?c++:c--;
    console.log(c)
    // if (this.id=="increase")
    //     c++;
    // else if(this.id=="decrease")
    //     c--;
    window.localStorage.setItem('counter',c.toString());
    counter.innerHTML=c;
}

