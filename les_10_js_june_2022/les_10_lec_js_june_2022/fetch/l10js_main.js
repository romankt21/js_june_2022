// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => console.log(response))
// .then(response => {
//     return response.json()
// })
// .then(data=> console.log(data));.


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => users.forEach(user=>{
        let div = document.createElement('div');
        div.innerText = user.name;
        document.body.appendChild(div)
    }));