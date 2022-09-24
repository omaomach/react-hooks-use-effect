import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {

  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  function handleCount() {
    setCount(count + 1)
  }

  function handleText(event) {
    setText(event.target.value)
  }

  useEffect(() => {
    document.title = text
    console.log("useEffect called");
  }, [count, text]);

  useEffect(() => {
    setTimeout(() => setCount(0), 5000)
  }, [])

  console.log("Component rendering");

  return (
    <div>
      <button onClick={handleCount}>Click Me {count}</button>
      <input type="text" placeholder="Type away..." value={text} onChange={handleText}/>
      <DogPics />
    </div>
  )
}

export default App;
