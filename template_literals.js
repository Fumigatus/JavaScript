//usage of template literals
let username="John"
let DOMAIN="google.com"
let mail=username+"@"+DOMAIN

console.log("Hello",username,"welcome to site your email address:",mail);

let info=`Hello ${username} welcome to site
your email address: ${mail}
time is ${new Date().getHours()} `

console.log(info);