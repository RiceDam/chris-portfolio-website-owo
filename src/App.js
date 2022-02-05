import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Karma from "./pages/Karma";
import BattleBuddy from "./pages/BattleBuddy";
import AboutPage from "./pages/About";
import Experience from "./pages/Experience";
import NoPage from "./pages/NoPage";
import ToursByLocals from "./pages/ToursByLocals";
import Navigation from "./components/Navigation";

import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter history={history} basename="/portfolio">
        <div className="AppContainer">
          <Navigation></Navigation>

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              exact
              path="/projects"
              element={<Projects></Projects>}
            ></Route>
            <Route exact path="/about" element={<AboutPage />}></Route>
            <Route exact path="/experience" element={<Experience />}></Route>
            <Route exact path="/projects/karma" element={<Karma />}></Route>
            <Route
              exact
              path="/projects/battle-buddy"
              element={<BattleBuddy />}
            ></Route>
            <Route
              exact
              path="/projects/tours-by-locals"
              element={<ToursByLocals />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
