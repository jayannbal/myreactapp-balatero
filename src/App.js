import "./App.css";
import { useState } from "react"; //to create a state

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2> COUNTER </h2>
      <h1> {count} </h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Set to Zero</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
