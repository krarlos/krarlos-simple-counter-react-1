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
      console.log(counter) //me permite ver el avance del counter
      // component unmount
      return () => clearInterval(interval)
    }, [counter])

    // array sin dependencia se actualiza constantemente segun necesida
    // [] dependencia del array vacio, corre una sola vez
    // array con una variable de estado [variableEstado] solo de actualiza cuando el estado cambia
    
    function calcularSegundos(aCounter, placeValue){
      return Math.floor(aCounter / placeValue) % 10
    }

  return (
    <>
    <SimpleCounter 
    miles = {calcularSegundos(counter,1000)}
    centena = {calcularSegundos(counter,100)}
    decena = {calcularSegundos(counter, 10)}
    unitarios = {calcularSegundos(counter , 1)}
    
    > </SimpleCounter>
    
    </>
  );
}

export default App;
