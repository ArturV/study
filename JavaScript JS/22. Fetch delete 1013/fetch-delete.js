import { displayPost } from "./displayPost.js";

await displayPost();

const deleteButton = document.querySelector("#deleteButton");

deleteButton.addEventListener("click", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });

  const data = await response.json();
  const isPostDeleted = response.ok;

  if (isPostDeleted) {
    document.body.querySelector("#usersContainer").innerHTML = "";
  }

  console.log(isPostDeleted);
});
