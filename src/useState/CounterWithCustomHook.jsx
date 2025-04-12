
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const {counter,addCounter,restCounter,resetCounter} = useCounter()
  return (
    <>

    <h1>CounterWithCustomhook</h1>
    <p>{counter}</p>
    <hr/>
    <button onClick={() => addCounter(2)} className='btn btn-primary'>+1</button>
    <button onClick={resetCounter} className='btn btn-primary'>Reset</button>
    <button onClick={() => restCounter(4)} className='btn btn-primary'>-1</button>
</>

)
}
