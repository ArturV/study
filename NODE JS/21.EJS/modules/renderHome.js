export const renderHome = (req, res) => {
  const number = +req.query.number; // i url irasome: pvz localhost:5000/?number=5
  const countdownNumber = +req.query.countdownNumber;

  const ip =
    req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  res.render("index", {
    title: "codeAcademy",
    pageName: "Home",
    ip,
    number,
    countdownNumber,
  });
};
