import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Stepone";
import SecondPage from "./components/Steptwo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Second" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;
