import React, { Component, useState } from "react";
import "../styles/App.css";
import slides from "../data";

const App = () => {
  const [fist, setfirst] = useState(0);
  function find() {
    if (fist === 0) {
      return (
        <>
          <button data-testid="button-restart" disabled>
            Restart
          </button>
          <button data-testid="button-prev" disabled>
            prev
          </button>
          <button data-testid="button-next">Next</button>
        </>
      );
    } else if (fist === 4) {
      return (
        <>
          <button data-testid="button-restart">Restart</button>
          <button data-testid="button-prev">prev</button>
          <button data-testid="button-next" disabled>
            Next
          </button>
        </>
      );
    } else {
      return (
        <>
          <button data-testid="button-restart">Restart</button>
          <button data-testid="button-prev">prev</button>
          <button data-testid="button-next">Next</button>
        </>
      );
    }
  }
  return (
    <div>
      <h1 data-testid="title"></h1>
      <p data-testid="text"></p>
      {}
    </div>
  );
};

export default App;
