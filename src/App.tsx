import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Contador</h1>

      <p>Contador: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        <ChevronUp />
      </button>
      <button onClick={() => setCount((prev) => (prev === 0 ? 0 : prev - 1))}>
        <ChevronDown />
      </button>
    </div>
  );
}

export default App;
