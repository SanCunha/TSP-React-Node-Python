import React, { useState } from "react";

import "./App.css";

import Params from "./components/params";
import Logs from "./components/logs";
import Solution from "./components/solution";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [logs, setLogs] = useState([]);
  const [solution, setSolution] = useState({
    route: "-",
    value: "-",
    coords: [
      [93, 15, 38, 65, 49, 56, 59, 35, 40, 42],
      [76, 40, 8, 38, 7, 72, 85, 82, 96, 12],
    ],
  });
  return (
    <div className="App">
      <div className="Top-Painel">
        <div className="Left-Display">
          <Params setLogs={setLogs} setSolution={setSolution} />
        </div>
        <div className="Right-Display">
          <Solution data={solution} />
        </div>
      </div>
      <div className="Botton-Painel">
        <Logs logs={logs} />
      </div>
    </div>
  );
}

export default App;
