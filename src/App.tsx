import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewDetails from "./pages/ViewDetails";
import Form from "./pages/Form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ViewDetails" element={<ViewDetails />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
