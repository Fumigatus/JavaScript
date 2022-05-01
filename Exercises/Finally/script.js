//ES9
//finally - call regardless
const urls=[
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos',
]

Promise.all(urls.map(url=>{
    return fetch(url).then(people=>people.json())
}))
    .then(arr=>{
        throw Error
        arr.map(x=>console.log(x))
    })
    .catch(err=>console.log('error:',err))
    .finally(()=>(console.log('finally')))