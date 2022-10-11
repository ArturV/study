const doFetch = async () => {
  const getOnlyXUsers = (amount) => {
    return users.slice(0, amount);
    // galima ant originalaus masyvo nustatyti length
  };

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");

    const users = await response.json();

    return users;
  };

  const users = await getUsers();

  console.log(getOnlyXUsers(3));
  const firstThreeUsers = getOnlyXUsers(3);
};

doFetch();
