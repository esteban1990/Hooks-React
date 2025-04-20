import { useState } from "react"


export const useCounter = (initialValue=10) => {
    const [counter,setCounter] = useState(initialValue)


    const addCounter = (value) => {
        setCounter(counter+value)
    }
    const restCounter = (value) => {
        setCounter(counter-value);
    }
    const resetCounter = () => {
        setCounter(initialValue)
    }

    
  const eliminarPorId = (counter) => {
    const nuevosItems = counter.filter(items => items.id !== counter);
    setCounter(nuevosItems);
  } 
    

  




  return    { 
    counter,
    addCounter,
    restCounter,
    resetCounter,
    eliminarPorId
    }
}
