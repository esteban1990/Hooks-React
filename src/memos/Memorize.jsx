import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {

    const { counter,addCounter} = useCounter(1);
    const [show,setShow] = useState(true);

  return (
    <>
    <h1>Counter: <Small value={counter} /> </h1>
    <hr />



    <button onClick={() => addCounter(1)} class="btn btn-primary">+Add</button>

    <button onClick={() => setShow(!show)} className='btn btn-outline-primary' >Show/Hide {JSON.stringify(show)}</button>
    </>
  )
}
