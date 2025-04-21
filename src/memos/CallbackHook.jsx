import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";



export const CallbackHook = () => {

    const [counter, setCounter]= useState(10);

    // sirve para memorizar la funcion y no volver a crearla cada vez que se renderiza el componente
    // se usa para optimizar el rendimiento de la aplicacion
    const incrementFather = useCallback((value) => {
        setCounter((c) => c + value);    
    }, [])



    // const incrementFather = (value) => {
    //     setCounter((c) => c+value)
    // }




  return (
  <>
    <h1>useCallBack Hook</h1>
    <hr/>
    <h2>CallBack Hook counter:{counter}</h2>
    <hr/>  


    <ShowIncrement incrementar={incrementFather} />
  
  

  </>
  )
}
