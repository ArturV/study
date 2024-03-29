const getContent = async () => {
  try {
    const response = await fetch("http://localhost:5000/articles", {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const content = await response.json();

    if (!response.ok || response.status >= 400) {
      alert(content.error);
      return window.location.assign(`./login.html`);
    }

    if (response.ok) {
      return content;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getContent };
