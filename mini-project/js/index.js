
wrapDiv = document.getElementsByClassName('wrap')[0]

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (let user of value) {
            let userDiv = document.createElement('div')
            userDiv.innerText = user.id + '. ' + user.name

            let userLink = document.createElement('a')
            userLink.innerText = 'User details'
            userLink.href = `user-details.html?user=${JSON.stringify(user)}`

            userDiv.appendChild(userLink)
            wrapDiv.appendChild(userDiv)
        }

    })