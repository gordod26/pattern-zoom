import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyDropzone from "./components/Dropzone/MyDropzone";
import Range from "./components/Range/Range";

function App() {
  return (
    <div className="App">
      
      <main>
        <Range />
        <MyDropzone />
      </main>
    </div>
  );
}

export default App;
