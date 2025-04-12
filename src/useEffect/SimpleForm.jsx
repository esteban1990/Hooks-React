import React, { useEffect, useState } from 'react'

export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        username:"",
        email:""
    });

    const {username,email} = formState

    const onChange = ({target}) => {
      const {name,value} = target
      setFormState({
        ...formState,
        [name]:value
      })

    }

    //un arreglo vacio en el useEffect significa que se renderizara solo una vez
    useEffect(() => {
    //     console.log("probando primer useEfffect")
    }, [])
    
      useEffect(() => {
    //     console.log("holaaaa2")
    }, [formState])

    useEffect(() => {
    //     console.log("probando segundo useEffect")
    //     return () => {

    //     }
    }, [email])
    


  return (
    <>
       <h4>SimpleForm</h4>


       <input
       tpye="text"
       class="form-control"
       name="username"
       placeholder='username'
       value={username}
       onChange={onChange}
       
       />
       <input
       tpye="email"
       class="form-control mt-2"
       name="email"
       placeholder='estevan@google.com'
       value={email}
       onChange={onChange}       
       />


     
         
        
    </>
  )
}
