fetch("settings.json")
    .then(resp => {
        return resp.json()
    })
    .then(respJson => {
        console.log(respJson)
        console.log(respJson.userName)
    })



let commentListDOM = document.querySelector("#commentList")
//with api
fetch("https://jsonplaceholder.typicode.com/comments")
    .then(resp => resp.json())
    .then(respJson => respJson.forEach(respJson => {
        let liDOM = document.createElement('li')
        liDOM.innerHTML=respJson.body
        commentListDOM.appendChild(liDOM)
    }))