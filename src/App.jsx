import { useState } from "react";
import Counter from "./components/Counter";

function App() {

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const handleClick1 = () => {
    setCounter1(counter1 + 1);
  }
    
  const handleClick2 = () => {
    setCounter2(counter2 + 1);
  }
  
  return (
    <>
    <Counter name="Counter 1" cpt={counter1} hc={handleClick1} />
    <Counter name="Counter 2" cpt={counter2} hc={handleClick2} />

    </>
  )
}

export default App
