import { useState } from "react";
import Counter from "./components/Counter";

function App() {

  const [counter, setCounter] = useState(0);
  const handlClick= () => {
    setCounter(counter + 1);
  }
  return (
    <>
    <Counter cpt={counter} hc={handlClick} />
    <Counter cpt={counter} hc={handlClick} />

    </>
  )
}

export default App
