import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  const handleCount = () => {
    // setCount(count + 1);
		setCount((prev) => prev + 1);
		setCount((prev) => prev + 1);
		setCount((prev) => prev + 1);
		setCount((prev) => prev + 1);
		setCount((prev) => prev + 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCount}>+1</button>
    </>
  );
}

export default App;
