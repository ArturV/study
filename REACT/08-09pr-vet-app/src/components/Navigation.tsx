import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { Logs } from "./Logs";
import { Medications } from "./Medications";
import { Pets } from "./Pets";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <header className="app-header">
        <Link to="/">Home</Link>
        <Link to="/pets">Pets</Link>
        <Link to="/medications">Medications</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </BrowserRouter>
  );
};
