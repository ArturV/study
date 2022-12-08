const getFilteredUsers = async () => {
  try {
    const response = await fetch("http://localhost:5000/users/:id");
    const users = await response.json();

    return users;
  } catch (error) {
    console.error(error);
  }
};

document.querySelector("#sort").addEventListener("click", async (e) => {
  await getFilteredUsers();
});
