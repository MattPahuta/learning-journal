// import blog data
import { blogData, featuredPost } from '../js/data.js'
const postsGrid = document.querySelector('#posts-grid');
const loadPostsBtn = document.querySelector('#load-posts'); // View more posts button


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
    <article id="blog-post-${post.id}" class="blog-post">
      <a href="post.html" id="post-link-${post.id}" class="post-link">
      <img src=${post.imageUrl} alt=${post.imageAlt} class="post-image">
      <div>
        <p class="post-date">${post.date}</p>
        <h3 class="post-title">${post.title}</h3>
        <p class="post-preview">${post.preview}.</p>
      </div>
      </a>
    </article>
    `
  }
  return blogFeedHtml;

}

// generate full post html
function generatePostHtml(post) {
  postHtml = `
  <div class="post-intro">
    <p id="post-date" class="post-date">${post.date}</p>
    <h2 id="post-title" class="post-title">${post.title}</h2>
    <p id="post-preview" class="post-preview">${post.preview}</p>
  </div>
  <img id="post-img" src="${post.imageUrl}" alt="${post.imageAlt}" class="post-image featured-img">
  <div id="post-content" class="post-content">${post.bodyHtml}</div>
  `
  return postHtml;

}


// render the post previews to the page
function render() {
  const postsGrid = document.querySelector('#posts-grid');
  postsGrid.innerHTML += generatePostPreviewHtml(getThreePosts(blogData))
}

// Event listeners
loadPostsBtn.addEventListener('click', () => {
  console.log('loading more posts...')
  console.log(blogData) // debug
  render()
})

const blogPosts = document.querySelectorAll('.blog-post');
blogPosts.forEach(blogPost => {
  blogPost.addEventListener('click', console.log('article clicked'))
})


render()

// postsGrid.addEventListener('click', (e) => {
//   console.log(e.target)
// })
// const postDate = document.getElementById('post-date');
// const postTitle = document.getElementById('post-title');
// const postPreview = document.getElementById('post-preview');
// const postImg = document.getElementById('post-img');
// const postContent = document.getElementById('post-content');
