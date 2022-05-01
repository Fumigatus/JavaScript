const urls = [
    'https://jsonplaceholder.typicode.com/posts', 
    'https://jsonplaceholder.typicode.com/users', 
    'https://jsonplaceholder.typicode.com/albums'
]

const getData= async function(){
    try
    {const [posts,users,albums] = await Promise.all(urls.map(url=>
        fetch(url).then(resp=>resp.json())
        ))
        console.log('posts:',posts),
        console.log('users:',users),
        console.log('albums:',albums)
    }
    catch(err)
    {
        console.log(err)
    }
}

getData()