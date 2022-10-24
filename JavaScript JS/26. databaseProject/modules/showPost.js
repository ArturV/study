const showPost = (post) => {
  const postContainer = document.querySelector("#postContainer");
  const postTitle = document.querySelector("#postTitle");
  const postBody = document.querySelector("#postBody");

  postContainer.style.visibility = "visible";

  postTitle.innerText = post.title;
  postBody.innerText = post.body;
};

export { showPost };
