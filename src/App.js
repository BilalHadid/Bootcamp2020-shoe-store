import React from "react";
import "./App.css";
import Navbar from "./component/navbar";
import { DataProvider } from "./component/context";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Navbar />
      </div>
    </DataProvider>
  );
}

export default App;
