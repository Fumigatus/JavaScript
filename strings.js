//string operations

let email="john@gmail.com"
let firstName="john"
let surName="WICK"

//string lenght
console.log("lenght")
console.log(email.length)
console.log("--------")

//first char
console.log("first char")
console.log(surName[0])
console.log(surName.charAt(0))
console.log("--------")

//Uppercase and lowercase
console.log("uppercase/lowercase")
firstName=firstName.toUpperCase()
console.log(firstName)
surName=surName.toLowerCase()
console.log(surName)
console.log("--------")

//search substring index
console.log("search")
console.log(email.search("@"))
console.log(email.search("r")) //if not exist returns -1
console.log("--------")

//indexOf
console.log("indexOf")
console.log(email.indexOf("@"))
console.log(email.indexOf("r")) //if not exist returns -1
console.log("--------")

//lastindexof
console.log("lastindexof")
console.log(email.lastIndexOf("m")) //returns the index of last place 
console.log("--------")

//slice
console.log("slice")
let DOMAIN=email.slice((email.search("@")+1))
console.log(DOMAIN)
console.log(DOMAIN.slice(0,DOMAIN.indexOf(".")))
console.log("--------")

//replace
console.log("replace")
email=email.replace("gmail.com","yahoo.com")
console.log(email)
console.log("--------")

//include 
console.log("include")
console.log(email.includes("@")) //if exist returns true
console.log(email.includes("r")) //if not exist returns false
console.log("--------")

//startWidth endWidth
console.log("endwitdh")
console.log(email.endsWith("yahoo.com"))
console.log("--------")

//capitilaze
console.log("capitilaze")
let fullName=`${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${surName[0].toUpperCase()}${surName.slice(1).toLowerCase()}`
console.log(fullName)
console.log("--------")

//concat 
console.log("concat")
let cFullName=firstName.concat(" ",surName)
console.log(cFullName)
console.log("--------")

//charat - returns the char in the index
console.log("charat")
console.log(email.charAt(4))