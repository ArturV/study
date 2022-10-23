const getRobots = async () => {
  try {
    const response = await fetch("https://magnetic-melon-yam.glitch.me");
    const robots = await response.json();

    renderTable(robots);
    console.log(robots);
  } catch {
    console.error(error);
  }
};

export { getRobots };
