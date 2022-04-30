const urls = [
    'https://jsonplaceholder.typicode.com/posts', 
    'https://jsonplaceholder.typicode.com/users', 
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url=>{
    return fetch(url).then(resp=>resp.json())
})).then(result=>{
    console.log('posts',result[0])
    console.log('users',result[1])
    console.log('albums',result[2])
}).catch(()=>console.log('error'))