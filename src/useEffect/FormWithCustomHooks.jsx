import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

    const {formState,onHandleChange, username,email,password,resetForm} = useForm({
        username:"",
        email:"",
        password:""
    })

    // const {username,email,password} = formState


  return (
    <>
       <h4>form with cusotm hook</h4>


       <input
       tpye="text"
       class="form-control"
       name="username"
       placeholder='username'
       value={username}
       onChange={onHandleChange}
        
       
       />
       <input
       tpye="email"
       class="form-control mt-2"
       name="email"
       placeholder='estevan@google.com'
       value={email}
       onChange={onHandleChange}
     
       
       />
       <input
       type="password"
       class="form-control mt-2"
       name="password"
       placeholder='ingresa tu contraseña'
       value={password}
       onChange={onHandleChange}
    
       
       />
       <button onClick={() => resetForm()} class="btn btn-danger mt-2">Reset Form</button>
     
  
        
    </>
  )
}
