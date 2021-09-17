import "./App.css";
import { useState } from "react";
import Search from "./components/search";
import Card from "./components/card";

function App() {
  const [cardResult, setCardResult] = useState("");

  return (
    <div className="App">
      <Search setCardResult={setCardResult} />
      {cardResult && <Card cardResult={cardResult} />}
    </div>
  );
}

export default App;
