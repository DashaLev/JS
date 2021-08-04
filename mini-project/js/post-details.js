const url = new URL(location)
const jsonPost = url.searchParams.get('post')
const post = JSON.parse(jsonPost)

let postAllInfo = document.getElementsByClassName('post-block')[0]
let commentsBox = document.getElementsByClassName('comments-box')[0]

let postTitle = document.getElementsByClassName('post-title')[0]
postTitle.innerText = post.title

let postUserInfo = document.createElement('h3')
postUserInfo.innerText = 'Post №' + post.id + ' by user id №' +  post.userId

let postText = document.createElement('p')
postText.innerText =  post.body

postAllInfo.append(postUserInfo, postText)


fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {

        for (let comment of value) {

            let commentItemBox = document.createElement('div')
            commentItemBox.classList.add('comment-item')

            let commentTitle = document.createElement('h4')
            commentTitle.innerText = comment.name

            let commentAuthor = document.createElement('div')
            commentAuthor.innerHTML = `by <span>${comment.email}</span>`
            commentAuthor.classList.add('comment-author')

            let commentInfo = document.createElement('div')
            commentInfo.innerHTML = `Comment №<span>${comment.id}</span> to post id №<span>${comment.postId}</span>`
            commentInfo.classList.add('comment-info')

            let commentBody = document.createElement('p')
            commentBody.innerText = comment.body
            let text = commentBody.innerHTML.split('<br>').filter(item => item !== '<br>').join(' ')
            commentBody.innerText = text

            commentItemBox.append(commentTitle,commentAuthor,commentInfo,commentBody)
            commentsBox.append(commentItemBox)

        }

    })
