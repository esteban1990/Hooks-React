import React, { useState } from 'react'

export const CounterApp = () => {

    const [state,setCounter] = useState({

        counter1:20,
        counter2:40,
        counter3:60
    });

    const {counter1 , counter2, counter3} = state

    // const addCounter = () => {
    //     setCounter({
    //         counter1: counter.counter1 + 1,
    //         counter2: counter.counter2,
    //         counter3: counter.counter3
    //     })
    // }

  return (
   <>
   
   <h4>{counter1}</h4>
   <h4>{counter2}</h4>
   <h4>{counter3}</h4>

    <button onClick={() => setCounter({
        ...state,
        counter1:counter1+1


    })} 
    class="btn btn-primary">
    Add + 1</button>
   
   
   </>
  )
}
