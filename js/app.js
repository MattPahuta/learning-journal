// import blog data
import { blogData } from '../js/data.js'

const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const heroPost = document.getElementById('hero-post'); // get the hero-post article 
const loadPostsBtn = document.querySelector('#load-posts'); // View more posts button

// handle nav hamburger menu
navToggle.addEventListener('click', () => {
  console.log('clicked');
  nav.classList.toggle('nav-visible');
})

// give me three more posts
function getThreePosts(blogPosts) {
  const postsToDisplay = [];
  for (let i = 0; i < 3; i++) { // try to get a max of 3 posts
    if (blogPosts.length) { // check there are posts remaining
      let post = blogPosts.shift()
      postsToDisplay.push(post)
    } else {
      console.log('End of posts...') // debug
    }
  }
  return postsToDisplay;
}

// generate the post preview html
function generatePostPreviewHtml(posts) { 
  let blogFeedHtml = ``
  for (const post of posts) {
    blogFeedHtml += `
    <article id="blog-post-${post.id}" class="blog-post">
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

// generate full post html
// * Future enhancement - generate post page html based on clicked article
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
  render()
  loadPostsBtn.classList.add('hidden')
})

heroPost.addEventListener('click', () => {
  location.assign('post.html')
})

render()

