const url = new URL(location)
const jsonUser = url.searchParams.get('user')
const user = JSON.parse(jsonUser)

let h2 = document.getElementsByClassName('title')[0]
h2.innerHTML = `Information about user <span>${user.name}</span>`

let userUl = document.getElementsByClassName('user-info')[0]

for (let key in user) {
    let liItem = document.createElement('li')

    if (typeof user[key] === 'object') {
        let ulSub = document.createElement('ul')
        liItem.innerHTML = key + ':'

        for (let i in user[key]) {
            let liSubItem = document.createElement('li')

            if (typeof user[key][i] === 'object') {
                let ulSubSub = document.createElement('ul')

                liSubItem.innerHTML = [i] + ':'

                for (let j in user[key][i]) {
                    let liSubSubItem = document.createElement('li')
                    liSubSubItem.innerHTML = `${j}: <span>${user[key][i][j]}</span>`
                    ulSubSub.append(liSubSubItem)
                    liSubItem.append(ulSubSub)
                }

                liSubItem.append(ulSubSub)
                ulSub.append(liSubItem)

            } else {

                liSubItem.innerHTML = `${i}: <span>${user[key][i]}</span>`
                ulSub.append(liSubItem)
            }
        }

        liItem.append(ulSub)
        userUl.append(liItem)

    } else {
        liItem.innerHTML = `${key}: <span>${user[key]}</span>`
        userUl.append(liItem)
    }
}

let postBtn = document.getElementsByTagName('button')[0]
let postsBox = document.getElementsByClassName('posts-box')[0]

postBtn.onclick = function () {

    postBtn.innerText === 'Show post of current user' ? (

        postBtn.innerText = 'Hide post of current user',
            fetch(`http://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(value => value.json())
                .then(value => {

                    for (let post of value) {
                        let postDiv = document.createElement('div')

                        let postTitle = document.createElement('h3')
                        postTitle.innerText = post.title

                        let postLink = document.createElement('a')
                        postLink.innerText = 'Post details'
                        postLink.href = `post-details.html?post=${JSON.stringify(post)}`

                        postDiv.append(postTitle,postLink)
                        postsBox.append(postDiv)
                    }

                }),
            document.body.append(postsBox)
    ) :  (
        postsBox.innerText = '',
            postBtn.innerText = 'Show post of current user'
    )

}