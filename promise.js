const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff worked')
    } else {
        reject('Error, it broke')
    }
})

// promise.then(result => console.log(result))

// promise
//     .then(result => result + '!')
//     .then(result2 => (result2 + '?'))
//     .catch(() => console.log('error'))
//     .then(result3 => console.log(result3 + '!'))

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve,100,'Boo!')
})


const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,'PEEKY')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve,2000,'Promise 4')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values=>console.log(values))