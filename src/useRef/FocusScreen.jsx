import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        console.log(inputRef)
        inputRef.current.select();
    }


  return (
    <>
    <h2>FocusScreen</h2>
    <hr/>
    <input  ref={inputRef}
            type="text"
            placeholder="Enter your name"
            className="form-control"
         />

         <button className='btn btn-primary' onClick={handleClick}>Enter</button>
    
    </>
  )
}
