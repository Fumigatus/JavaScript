//for await of
const urls=[
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos',
]

// const getData= async function(){
//     try{
//         const [posts,comments,users]= await Promise.all(urls.map(url=>{
//             return fetch(url).then(respJson=>respJson.json())
//         }))
//         console.log(posts)
//         console.log(comments)
//         console.log(users)
//     }catch(err){
//         console.log('error=>',err)
//     }
// }

const getData = async function(){
    const arrayOfPromises = urls.map(url=>fetch(url))
    for await (let req of arrayOfPromises){
        const data = await req.json()
        console.log(data)
    }
}

getData()