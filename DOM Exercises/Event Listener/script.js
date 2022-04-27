const selectBox = document.querySelector('#selectColor');
const button = document.querySelector('#button');
const form = document.querySelector('.inputText');  
const container = document.querySelector('.container');

selectBox.addEventListener('click' ,function(){
    console.log("selectBox");    
    })
form.addEventListener('click',function(){
    console.log("form");
    })
container.addEventListener('click',()=>console.log('container'))
button.addEventListener('click',()=>console.log('button'))