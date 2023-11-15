// usare useStates , useEffect, setInterval, props en este proyecto
import {  useState, useEffect } from "react";
import SimpleCounter from "./SimpleCounter";


function App() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      // componet mounting puts it in the browser
      const interval = setInterval (() => {
        setCounter(counter => counter + 1)
      },1000)
      console.log(counter)
    }, [])
    
  return (
    <>
    <SimpleCounter></SimpleCounter>
    
    </>
  );
}

export default App;
