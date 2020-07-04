import React from "react";
import "./App.css";
import Navbar from "./component/navbar";
import { Cards } from "./component/card";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards />
    </div>
  );
}

export default App;
