const doFetch = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const response = await request.json();

  console.log({ response });

  return response;
};

//-- POST metodas

const createArticle = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  });

  const response = await request.json();

  console.log(response);
};

doFetch(); // kai dirbi modulyje naudok await

console.log(1);

createArticle();
createArticle();
