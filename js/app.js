// import blog data
import blogData from '../js/data.js'

const loadPostsBtn = document.querySelector('#load-posts');

loadPostsBtn.addEventListener('click', () => {
  console.log('loading more posts...')
  console.log(blogData) // debug
  render()
})

// give me three more posts
function getThreePosts(blogPosts) {
  const postsToDisplay = [];
  for (let i = 0; i < 3; i++) { // try to get a max of 3 posts
    if (blogPosts.length) { // check there are posts remaining
      let post = blogPosts.shift()
      postsToDisplay.push(post)
    } else {
      console.log('End of posts...')
    }
  }
  console.log(postsToDisplay)
  return postsToDisplay;
}


// generate the post preview html
function generatePostPreviewHtml(posts) { // takes an array of posts
  let blogFeedHtml = ``

  for (const post of posts) {
    blogFeedHtml += `
    <article id="blog-post-${post.id}">
      <img src=${post.imageUrl} alt=${post.imageAlt} class="post-image">
      <div>
        <p class="post-date">${post.date}</p>
        <h3 class="post-title">${post.title}</h3>
        <p class="post-preview">${post.preview}.</p>
      </div>
    </article>
    `
  }
  return blogFeedHtml;

}

// render the post previews to the page
function render() {
  const postsGrid = document.querySelector('#posts-grid');
  postsGrid.innerHTML += generatePostPreviewHtml(getThreePosts(blogData))

}

render()