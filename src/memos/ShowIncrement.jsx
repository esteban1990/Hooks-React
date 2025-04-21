import React, {memo} from 'react'

export const ShowIncrement = memo(({incrementar}) => {

    console.log('Me volvi a generar :(')
  return (
    <button
    
    
      className="btn btn-primary"
      onClick={() => {
        incrementar(2)
      }}

    >+1Add</button>
  )
})
