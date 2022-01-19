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
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects/karma" element={<Karma />} />
        <Route path="/projects/battle-buddy" element={<BattleBuddy />} />
        <Route path="/projects/tours-by-locals" element={<ToursByLocals />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
