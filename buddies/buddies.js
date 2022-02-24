const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => displayBuddies(data));
}
loadBuddies()
displayBuddies = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies')
    for (const buddy of buddies) {
        console.log(buddy.name.first)
        const p = document.createElement('p')
        p.innerText = `name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.second}, email: ${buddy.email}`;
        buddiesDiv.appendChild(p);

    }
}
