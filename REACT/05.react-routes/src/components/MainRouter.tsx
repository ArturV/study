import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Home } from "./Home";
import { VisitCount } from "./VisitCount";

export const MainRouter = (props: any) => {
  //onst { pathname } = location; // arba: window.location

  return (
    <BrowserRouter>
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="*">Some</Link>
        <Link to="/asd">Some2</Link>
      </header>

      {props.children}

      <VisitCount />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p>Nerastas</p>} />
      </Routes>
    </BrowserRouter>
  );
};
