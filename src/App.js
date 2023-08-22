import React from "react";
import Gugudan from "./Gugudan";

function App() {
  return (
    <div className="app">
      <h1>구구단</h1>
      <Gugudan startDan={2} endDan={4} />
      <Gugudan startDan={5} endDan={7} />
      <Gugudan startDan={8} endDan={9} />
    </div>
  );
}

export default App;
