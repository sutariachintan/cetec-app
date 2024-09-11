import { useEffect } from "react";
import "./App.css";
import BadgeScan from "./components/BadgeScan";

function App() {
  useEffect(() => {
    document.title = "Cetec App v1.0";
  });
  return (
    <div>
      <BadgeScan />
    </div>
  );
}

export default App;
