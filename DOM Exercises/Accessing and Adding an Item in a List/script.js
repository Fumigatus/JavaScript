let lastChild=document.querySelector("ul#list>li:last-child")
lastChild.innerHTML="Last item changed"

let firstChild=document.querySelector("ul#list>li:first-child")
firstChild.innerHTML="First item changed"

let ulDOM=document.querySelector(`ul#list`)
let liDOM=document.createElement('li')
let liDOM2=document.createElement('li')
liDOM.innerHTML="Created with DOM"
liDOM2.innerHTML="Created with DOM"
ulDOM.append(liDOM)
ulDOM.prepend(liDOM2)