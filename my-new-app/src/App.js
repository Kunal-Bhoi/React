import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-3">
          {/* <Switch> */}
          <Routes>
            {/* <Route path="/about">
            <About/>
            </Route>
            <Route path="/">
            <TextForm heading="Enter the text to analyze below : " mode={mode} />
            </Route> */}
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze below : "
                  mode={mode}
                />
              }
            />
          </Routes>
          {/* </Switch> */}
        </div>
      </Router>
    </>
  );
}

export default App;
