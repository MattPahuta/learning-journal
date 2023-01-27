// import blog data
import blogData from '../js/data.js'

const loadPostsBtn = document.querySelector('#load-posts');

loadPostsBtn.addEventListener('click', () => {
  console.log('loading more posts...')
  console.log(blogData)
  // generatePostPreviewHtml(blogData)
  render()
})

// give me three more posts
function getThreePosts(blogData) {
  // run on page load?
  // use slice to get 3 posts
  // flip isDisplayed to true (in calling function?)

  // *** with filter (sort of?)
  // const threePreviews = blogData.filter(blogObj => {
  //   if (!blogObj.isDisplayed) {
  //     blogObj.isDisplayed = true;
  //     return blogObj;
  //   }
  // }).slice(0, 3)
  // return threePreviews;

  // ***with forEach
  const threePosts = [];
  blogData.forEach(post => {
    if (!post.isDisplayed) {
      post.isDisplayed = true;
      threePosts.push(post);
    }
  }) 
  return threePosts.slice(0,3)

  // *** with for of loop
  // const justThree = [];
  // for (let i = 0; i < blogData.length; i++) {
  //   if (!blogData[i].isDisplayed) {
  //     justThree.push(blogData[i])
  //     blogData[i].isDisplayed = true;
  //   }
  // }

  // return justThree.slice(0,3)


}

// a function to flip the isDisplayed to true
function handleDisplayedFlag(posts) {

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