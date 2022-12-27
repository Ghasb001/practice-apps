import React, { Component} from "react";
import Word from "./word.jsx";

var App = () => {
  return(
    <div className="App">
      <h1> Glossary </h1>
      <div word="word">
          <Word />
        </div>
    </div>
  );
}

export default App;