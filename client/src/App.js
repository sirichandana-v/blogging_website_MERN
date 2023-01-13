import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Splash from "./components/Splash/Splash";
import Home from "./components/Home/Home";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar open={open} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Splash open={open} setOpen={setOpen} />}
          />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
