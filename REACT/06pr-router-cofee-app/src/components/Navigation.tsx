import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Add } from "../Add";
import { Home } from "../Home";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <header className="Ap-header">
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<p>Cant find page</p>} />
      </Routes>
    </BrowserRouter>
  );
};
