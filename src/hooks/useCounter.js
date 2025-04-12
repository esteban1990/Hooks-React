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




  return    { 
    counter,
    addCounter,
    restCounter,
    resetCounter
    }
}
