import React from "react";
import "./App.css";
import Navbar from "./component/navbar";
import { Cards } from "./component/card";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";

function NotFound() {
  return <div>Not Found</div>;
}

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">Navbar</Link> <Link to="card">Card</Link>
      </div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="card" element={<Cards />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
