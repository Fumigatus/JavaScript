let op = function(a, b, operator) {
    switch(operator) {
        case 'add':
            return a + b;
        break;
        case 'sub':
            return a - b;
        break;
        case 'mul':
            return a * b;
        break;
        case 'div':
            return a / b;
        break;
        default:
            return 'Undefined op';
        break;
    }
};

console.log(op(2,5,'add'))
console.log(op(51,4,'div'))

var money;
var canBuy = 
    (money < 17) ? "Satın alamazsın..":
    (money > 30) ? "Satın alabilirsin..":
    "Para miktarını girmen gerekmektedir..";

console.log(canBuy) 