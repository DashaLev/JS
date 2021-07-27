// 1.Отримати відповідь з ресурсу та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts

// 2.Отримати відповідь з ресурсу та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments

let commentsWrap = document.createElement('div')
    commentsWrap.style.backgroundColor = 'aliceblue'

let commentsTitle = document.createElement('h2')
    commentsTitle.innerText = 'Comments'

    commentsWrap.appendChild(commentsTitle)
    document.body.appendChild(commentsWrap)

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {

        for (let comment of value) {

            let commentDiv = document.createElement('div')
            let commentNameEmail = document.createElement('h3')
            let commentBody = document.createElement('p')

            commentNameEmail.innerText = `${comment.name} by ${comment.email}`
            commentBody.innerText = comment.body

            commentDiv.appendChild(commentNameEmail)
            commentDiv.appendChild(commentBody)

            commentsWrap.appendChild(commentDiv)

        }
    });


let postsWrap = document.createElement('div')
    postsWrap.style.backgroundColor = 'antiquewhite'

let postsTitle = document.createElement('h2')
    postsTitle.innerText = 'Posts'

    postsWrap.appendChild(postsTitle)
    document.body.appendChild(postsWrap)

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {

        for (let post of value) {

            let postDiv = document.createElement('div')
            let postTitle = document.createElement('h3')
            let postBody = document.createElement('p')

            postTitle.innerText = post.title
            postBody.innerText = post.body

            postDiv.appendChild(postTitle)
            postDiv.appendChild(postBody)

            postsWrap.appendChild(postDiv)

        }
    });