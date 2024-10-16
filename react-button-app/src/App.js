import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <div>
          <button data-testid="minus-button">-</button>
          <button data-testid="plus-button">+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
