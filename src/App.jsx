// eslint-disable-next-line no-unused-vars
import {useState} from "react";

function App() {
  // const isLoggedIn = false;
  // const myClass = "text-3xl font-bold text-red-500";
  // const frameworks = ["React", "Vue", "Angular", "Svelte", "Ember"]
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  }
  return (
    <>
      {/* <h1 className={myClass}>{isLoggedIn ? "Logged In" : "Not Logged In"}</h1>
      {frameworks.map((frm) => (
        <li key={frm}>
          {frm}
        </li>
      ))} */}

      <div className="flex justify-between items-center">
              <h1 className="text-2xl text-green-500">Counter : {counter}</h1>
      <button className="bg-blue-500
       hover:bg-blue-700
        text-white
        font-bold
         py-2 px-4
         rounded"
        onClick={handleClick}>+</button>
</div>
    </>
  )
}

export default App
