import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world! </h1>
      </div>
    </>
  );
}

export default App;
