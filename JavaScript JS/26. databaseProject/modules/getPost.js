const getPost = async (postNumber) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postNumber}`,
      {
        // GET pagal nutylejima, galima nerasyti. dazniausiai naudojama su POST ir PATCH
        method: "GET",
      }
    );
    const post = await response.json();

    return post;
  } catch (error) {
    console.log(error);
  }
};

export { getPost };
