import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyDropzone from "./components/Dropzone/MyDropzone";
import Range from "./components/Range/Range";

function App() {
  const [zoom, setZoom] = useState(50);

  return (
    <div className="App">
      <main>
        <Range zoom={zoom} handleZoom={setZoom} />
        <MyDropzone zoom={zoom} />
      </main>
    </div>
  );
}

export default App;
