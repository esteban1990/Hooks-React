import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { LoadedMessage } from '../examples/LoadedMessage';
import { PokemonCard } from '../examples/PokemonCard';




export const Layout = () => {

    const {counter,addCounter,restCounter, resetCounter, eliminarPorId } = useCounter(1)
    
   const {data,isLoading,hasError} = useFetch (`https://pokeapi.co/api/v2/pokemon/${counter}`); 
 
  console.log(data);


  return (
    <>
    <h3>MultipleCustomHooks</h3>

    { 
        isLoading
        ? <LoadedMessage/>
        :

      <PokemonCard id={counter}
                  name={data?.name}
                  sprites= {[
                    data?.sprites.front_default,
                    data?.sprites.front_shiny,
                    data?.sprites.back_default,
                    data?.sprites.back_shiny

                  ]}
                  
                              /> 
    }   

    <p>{data?.name}</p>
    <button className='btn btn-primary' onClick={() => counter > 1 ? restCounter(1) : null}>Anterior</button>
    <button className='btn btn-primary' onClick={() => addCounter(1)}>Siguiente</button>
    <button className='btn btn-secondary' onClick={() => resetCounter()}>Reset</button>
    <button className='btn btn-danger' onClick={() => eliminarPorId(counter)}>Borrar</button>
    
    </>
  )
}
