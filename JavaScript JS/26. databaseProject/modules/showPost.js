const postElement = document.createElement("p");

const showPost = (post) => {
  postElement.innerText = JSON.stringify(post);

  document.body.append(postElement);
};

export { showPost };
