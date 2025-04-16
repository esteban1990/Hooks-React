import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';
import { LoadedMessage } from './LoadedMessage';
import { PokemonCard } from './PokemonCard';




export const MultipleCustomHooks = () => {

    const {counter,addCounter,restCounter } = useCounter(1)
    
   const {data,isLoading,hasError} = useFetch (`https://pokeapi.co/api/v2/pokemon/${counter}`);
  //  console.log({data})


  return (
    <>
    <h3>MultipleCustomHooks</h3>

    { 
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
    <button className='btn btn-primary' onClick={() => counter > 1 ? restCounter(1) : null}>Anterioor</button>
    <button className='btn btn-primary' onClick={() => addCounter(1)}>Siguiente</button>
    
    </>
  )
}
