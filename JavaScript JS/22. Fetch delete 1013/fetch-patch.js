const deleteButton = document.querySelector("#patchButton");

patchButton.addEventListener("click", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
  });

  const isPostPatched = response.ok;

  if (isPostPatched) {
    document.body.querySelector("#usersContainer").innerHTML = "";
  }

  console.log(isPostPatched);
});
