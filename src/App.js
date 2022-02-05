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
import {
  BrowserRouter,
  Routes,
  Navigate,
  Route,
  HashRouter,
} from "react-router-dom";

const history = createBrowserHistory();

export default function App() {
  return (
    <div>
      <HashRouter history={history}>
        <div className="AppContainer">
          <Navigation></Navigation>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects></Projects>}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/projects/karma" element={<Karma />}></Route>
            <Route
              path="/projects/battle-buddy"
              element={<BattleBuddy />}
            ></Route>
            <Route
              path="/projects/tours-by-locals"
              element={<ToursByLocals />}
            ></Route>
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}
