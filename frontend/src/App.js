import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import DomainCheck from "./pages/DomainCheck";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Report from "./pages/Report";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check" element={<DomainCheck />} />
        <Route path="/results" element={<Results />} />
        <Route path="/report" element={<Report />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
