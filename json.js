
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data.title))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data))
}

function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        console.log(user)
        const li = document.createElement('li');
        li.innerText = `name: ${user.name}, email: ${user.email}`;
        ul.appendChild(li)
    }
}



function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPost(data))
}

loadPost()
function displayPost(data) {
    const divContainer = document.getElementById('post')
    for (const post of data) {
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p> ${post.body} </p>`
        divContainer.appendChild(div)
        console.log(post);

    }
}


