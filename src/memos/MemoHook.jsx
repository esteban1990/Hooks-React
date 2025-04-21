import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'


//tiro la funcion afuera del componente para que no se reproduzca en cada renderizado
const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos...');
    }
    return `${iterationNumber} iteraciones realizadas`;
}


export const MemoHook = () => {

    const { counter,addCounter} = useCounter(10);
    const [show,setShow] = useState(true);

    const memorizeValue = useMemo(() => {
        heavyStuff(counter);
    }, [counter]);






  return (
    <>
    <h1>Counter: <small>{counter}</small> </h1>
    <hr />


    <h4>{memorizeValue}</h4>

    <button onClick={() => addCounter(1)} class="btn btn-primary">+Add</button>

    <button onClick={() => setShow(!show)} className='btn btn-outline-primary' >Show/Hide {JSON.stringify(show)}</button>
    </>
  )
}
