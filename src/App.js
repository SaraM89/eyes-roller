import React, { Component } from "react";
import "./App.css";
import Face from "./face/face";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Eyes Roller</h1>
        </header>
        <main className="container">
          <Face leye={180} reye={180} />
          <Face leye={90} reye={45} />
          <Face leye={30} reye={90} />
        </main>
      </div>
    );
  }
}

export default App;
