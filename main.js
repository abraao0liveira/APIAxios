const url = "https://api.github.com/users/abraao0liveira"

// GET 
function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}
// POST 
function addNewUser(newUser){
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}
const newUser = {
    name: "Sophie Hatter",
    avatar_url: "https://thicc.mywaifulist.moe/waifus/18127/7b673b37bc9076e7872b5259d5a61c7bf067c8ffb37a39409578fbe58c6cb9ab_thumb.jpg"
}
// GET com parametros 
function getUser(){
    axios.get(url)
    .then(response => {
        const data = response.data
        userName.textContent = userUpdated.name
        userAvatar.src = userUpdated.avatar_url
    })
    .catch(error => console.error(error))
}
// PUT 
function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}
const userUpdated = {
    name: "Howl Jenkins",
    avatar_url: "https://i.pinimg.com/564x/e2/9c/d3/e29cd3781b81ff5ea769087761a55255.jpg"
}
// DELETE
function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

//getUsers()
//addNewUser()
getUser()
//updateUser(3, userUpdated)
//deleteUser(3)
