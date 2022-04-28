let welcome=document.getElementById("welcome")
console.log("classes:",welcome.classList)
console.log("classes after add:",welcome.classList.add('text','first','second','third')) //we can add multiple class
console.log("classes after remove:",welcome.classList.remove('second','third')) //we can remove multiple class
console.log("1st index class:",welcome.classList.item(1)) //returns the class in HTML in the given index order. if the index equal or bigger than lenght of index returns undefined
console.log("contains:",welcome.classList.contains('first')) //if the class exist return true if its not returns false
console.log("toggle:",welcome.classList.toggle('fourth')) //if the class exist then remove class if its not exist then add class
console.log("classes:",welcome.classList)
console.log("replace fourth to fifth",welcome.classList.replace('fourth','fifth')) //replace the existing class to another one
console.log("lenght:",welcome.classList.length) //lenght of the class
