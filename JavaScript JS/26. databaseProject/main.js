import { getPost } from "./modules/getPost.js";
import { showPost } from "./modules/showPost.js";
import { updatePost } from "./modules/updatePost.js";

const form = document.querySelector("#getPostNumberForm");

const updatePostButton = document.querySelector("#updatePostButton");

updatePostButton.addEventListener("click", updatePost);

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const postNumber = +document.querySelector("#postNumberInput").value;

  if (typeof postNumber === "number" && !Number.isNaN(postNumber)) {
    // uzdejus pliusa teoriskai nereikia

    const post = await getPost(postNumber);

    showPost(post);
  }
});
