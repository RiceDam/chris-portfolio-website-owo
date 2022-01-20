import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Karma from "./pages/Karma";
import BattleBuddy from "./pages/BattleBuddy";
import About from "./pages/About";
import Experience from "./pages/Experience";
import NoPage from "./pages/NoPage";
import ToursByLocals from "./pages/ToursByLocals";

import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/experience" element={<Experience />} />
        <Route path="/portfolio/projects/karma" element={<Karma />} />
        <Route
          path="/portfolio/projects/battle-buddy"
          element={<BattleBuddy />}
        />
        <Route
          path="/portfolio/projects/tours-by-locals"
          element={<ToursByLocals />}
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
